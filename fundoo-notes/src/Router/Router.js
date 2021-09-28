import React from "react";
import LoginPage from "../pages/Login";
import SignIn from "../pages/SignIn";
import DashBoard from "../components/Dashboard";
import ProtectedRoute from "../Protected Route/ProtectedRoute";
import AuthencatedRoute from "../AuthRoute/AuthRoute";
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
          <AuthencatedRoute path="/signin" component={SignIn} />
          <ProtectedRoute path="/dashboard" component={DashBoard} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default RouterDOM;
