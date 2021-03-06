import { useContext, useEffect, useReducer } from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import { useAuth } from "./hooks";

import {
  AuthContext,
  AuthReducer,
  initialState,
} from "./context/authcontext/authContext";

import AuthPage from "./components/pages/authpage/AuthPage";
import BlogsPage from "./components/pages/blogspage/BlogsPage";
import HomePage from "./components/pages/homepage/HomePage";
import CreateBlogPage from "./components/pages/createblogpage/CreateBlogPage";
import UsersPage from "./components/pages/userspage/UsersPage";

import "./App.css";
import ProfilePage from "./components/pages/profilepage/ProfilePage";
import { Spinner } from "./components/common/spinner/Spinner";
import { useAlert } from "react-alert";
import { useComments } from "./hooks/";

function App() {
  const { data, currentUserLoading } = useAuth();
  const [state, dispatch] = useContext(AuthContext);

  useComments();
  return (
    <Switch>
      {!state?.authorized && currentUserLoading === false && (
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
      {!state?.authorized && currentUserLoading !== false && (
        <Switch>
          <Route path="/">
            <Spinner />
          </Route>
        </Switch>
      )}
      {state?.authorized && (
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
          <Route
            path="/blogs/:id?"
            render={({ match }) => {
              return <BlogsPage id={match.params.id} />;
            }}
          />
          <Route path="/profile">
            <ProfilePage />
          </Route>
          {["administrator", "publisher"].includes(
            data?.getCurrentUser?.role?.name
          ) && (
            <Route path="/create-blog">
              <CreateBlogPage />
            </Route>
          )}

          {["administrator"].includes(data?.getCurrentUser?.role?.name) && (
            <Route path="/users">
              <UsersPage />
            </Route>
          )}

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
