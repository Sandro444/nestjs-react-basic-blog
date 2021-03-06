import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ContextLayer } from "./ContextLayer";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  split,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { onError } from "@apollo/client/link/error";

import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { useAuth } from "./hooks";

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

const uploadLink = createUploadLink({
  uri: "http://localhost:3001/graphql",
  headers: {
    "keep-alive": "true",
  },
});

const wsLink = new WebSocketLink({
  uri: "ws://localhost:3001/graphql",
  options: {
    reconnect: true,
    connectionParams: () => {
      return {
        isWebSocket: true,
        headers: {
          authorization: `Bearer ${localStorage.getItem("auth-token") || null}`,
        },
      };
    },
  },
});

const useLogoutWrapper = () => {
  const { logOut } = useAuth();
  logOut();
};

const httpLink = new HttpLink(
  { uri: "http://localhost:3001/graphql" },
  (operation, forward) => {
    return forward(operation);
  }
);

const logoutLink = onError(({ networkError }) => {
  console.log("logout link");
  if (networkError.statusCode === 401) useLogoutWrapper();
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${localStorage.getItem("auth-token") || null}`,
    },
  }));

  return forward(operation);
});

const httpLinkWithAuth = authMiddleware.concat(httpLink);
const uploadLinkWithAuth = authMiddleware.concat(uploadLink);

const directionalLink = split(
  (operation) => {
    return !!operation.variables.file;
  },
  uploadLinkWithAuth,
  httpLinkWithAuth
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    console.log("definition", definition);
    const isSubscription =
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription";
    console.log("isSubscription", isSubscription);
    return isSubscription;
  },
  wsLink,
  directionalLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AlertProvider template={AlertTemplate} {...options}>
          <ContextLayer />
        </AlertProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
