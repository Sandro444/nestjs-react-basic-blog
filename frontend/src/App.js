import { useContext, useReducer } from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import { useAuth } from "./hooks/common/auth/useAuth";

import {
  AuthContext,
  AuthReducer,
  initialState,
} from "./context/authcontext/authContext";

import AuthPage from "./components/pages/authpage/AuthPage";
import BlogsPage from "./components/pages/blogspage/BlogsPage";
import HomePage from "./components/pages/homepage/HomePage";

import "./App.css";

function App() {
  const [state, dispatch] = useContext(AuthContext);
  console.log("state", state);
  return (
    <Switch>
      {!(state?.authorized) && (
        <Switch>
          {console.log("state not authorized")}
          <Route path="/auth/login">
            <AuthPage />
          </Route>
          <Route path="/auth/register">
            <AuthPage />
          </Route>
          <Route path="/">
            <Redirect to="/auth/login" />
          </Route>
        </Switch>
      )}
      {(state?.authorized) && (
        <Switch>
                    {console.log("state  authorized")}
          <Route exact path="/auth">
            <Redirect to="/index" />
          </Route>
          <Route path="/auth/:authType">
            <Redirect to="/index" />
          </Route>
          <Route path="/index">
            <HomePage />
          </Route>
          <Route path="/blogs">
            <BlogsPage />
          </Route>
          <Route exact path="/">
            {!state?.authorized ? <HomePage /> : <Redirect to="/auth/login" />}
          </Route>
          <Route path="/">{"404 not found"}</Route>
        </Switch>
      )}
    </Switch>
  );
}

export default App;
