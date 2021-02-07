import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ContextLayer } from './ContextLayer';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  concat,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { useAuth } from './hooks/common/auth/useAuth';

const useLogoutWrapper = () => {
  const { logOut } = useAuth();
  logOut();
};

const httpLink = new HttpLink({ uri: 'http://localhost:3001/graphql' });

const logoutLink = onError(({ networkError }) => {
  if (networkError.statusCode === 401) useLogoutWrapper();
});
const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${localStorage.getItem('auth-token') || null}`,
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink, logoutLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ContextLayer />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
