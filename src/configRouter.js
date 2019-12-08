import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./Pages/home-page/home.page";
import Register from "./Pages/register-page/register.page";
import Login from "./Pages/login-page/login.page";
import { AuthContext, firebaseApp } from "./configFirebase";

export const Routes = () => {
  const { user } = useContext(AuthContext);
  const logout = () => {
    console.log("HE IS trying to sign out");
    firebaseApp
      .auth()
      .signOut()
      .then(() => <Redirect to={"/"} />);
    return <Redirect to={"/"} />;
  };

  // <OnlySignInRoute path={"/logout"} exact component={user && user.email ? logout() : <Redirect to={"/"} />} />
  return (
    <>
      <OnlySignInRoute path={"/"} exact component={<Home />} />
      <OnlyNotSignInRoute path={"/register"} exact component={<Register />} />
      <OnlyNotSignInRoute path={"/login"} exact component={<Login />} />
    </>
  );
};
const OnlyNotSignInRoute = ({ component, ...rest }) => {
  const { user } = useContext(AuthContext);
  return <Route {...rest} render={() => (!user ? component : <Redirect to={"/"} />)} />;
};
const OnlySignInRoute = ({ component, ...rest }) => {
  const { user } = useContext(AuthContext);
  return <Route {...rest} render={() => (user ? component : <Redirect to={"/register"} />)} />;
};
