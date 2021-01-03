import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import {useAuth} from './hooks/common/auth/useAuth'

import AuthPage from './components/pages/authpage/AuthPage'
import BlogsPage from './components/pages/blogspage/BlogsPage'
import HomePage from './components/pages/homepage/HomePage'


import "./App.css";

function App() {
  const {authorized} = useAuth()
  return (
      <Switch>
        {!authorized && 
        <Switch>
          <Route path="/auth/login"><AuthPage /></Route>
          <Route path="/auth/register"><AuthPage /></Route>
          <Route path="/"><Redirect to="/auth/login" /></Route>
        </Switch>
        }
        <Route exact path='/auth'>
          <Redirect to="/auth/login" />
        </Route>
        <Route path='/auth/:authType'>
          <AuthPage />
        </Route>
        <Route path='/index'>
          <HomePage />
        </Route>
        <Route path='/blogs'>
          <BlogsPage />
        </Route>
        <Route exact path='/'>
          {
            authorized ? <HomePage /> : <Redirect to="/auth/login" />
          }
        </Route>
        <Route path="/">
          {"404 not found"}
        </Route>
      </Switch>
  );
}

export default App;
