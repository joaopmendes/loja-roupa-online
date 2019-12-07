import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./Pages/home-page/home.page";
import Register from "./Pages/register-page/register.page";
import { firebaseAuth } from "./configFirebase";
export const Routes = ({ children }) => {
  return (
    <>
      <PrivateRoute path={"/"} exact component={<Home />} />
      <Route path={"/register"} exact render={() => <Register />} />
    </>
  );
};

const PrivateRoute = ({ component, ...rest }) => {
  return <Route {...rest} render={() => (firebaseAuth.currentUser ? component : <Redirect to={"/register"} />)} />;
};
