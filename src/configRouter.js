import React from "react";
import { Route } from "react-router-dom";
import Home from "./Pages/home-page/home.page";
export const Routes = ({ children }) => {
  return (
    <>
      <Route path={"/"} exact render={() => <Home />} />
    </>
  );
};
