import React from "react";
import { Route } from "react-router-dom";
import Home from "./Pages/home-page/home.page";
import Register from "./Pages/register-page/register.page";
export const Routes = ({ children }) => {
  return (
    <>
      <Route path={"/"} exact render={() => <Home />} />
      <Route path={"/register"} exact render={() => <Register />} />
    </>
  );
};
