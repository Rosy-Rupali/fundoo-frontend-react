import React from "react";
import LoginPage from '../pages/Login'
import SignIn from '../pages/SignIn'
import DashBoard from "../components/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

const RouterDOM = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/signin" component={SignIn} />
            <Route path="/dashboard" component={DashBoard} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default RouterDOM;
