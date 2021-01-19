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
import ProfilePage from "./components/pages/profilepage/ProfilePage";

function App() {
  const [state, dispatch] = useContext(AuthContext);
  
  return (
    <Switch>
      {!(state?.authorized) && (
        <Switch>
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
          <Route path="/profile">
            <ProfilePage />
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
