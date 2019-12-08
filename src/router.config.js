import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./Pages/home-page/home.page";
import Register from "./Pages/register-page/register.page";
import Login from "./Pages/login-page/login.page";
import { AuthContext } from "./firebase.config";

export const Routes = () => {
  return (
    <>
      <Route path={"/"} exact render={() => <Home />} />
      <OnlyNotSignInRoute path={"/register"} exact component={<Register />} />
      <OnlyNotSignInRoute path={"/login"} exact component={<Login />} />
    </>
  );
};
const OnlyNotSignInRoute = ({ component, ...rest }) => {
  const { user } = useContext(AuthContext);
  return <Route {...rest} render={() => (!user ? component : <Redirect to={"/"} />)} />;
};
// const OnlySignInRoute = ({ component, ...rest }) => {
//   const { user } = useContext(AuthContext);
//   return <Route {...rest} render={() => (user ? component : <Redirect to={"/register"} />)} />;
// };
