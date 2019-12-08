import React from "react";
import ReactDOM from "react-dom";
import ReduxWrapper from "./redux/configStore";
import { BrowserRouter, Switch } from "react-router-dom";
import { Routes } from "./configRouter";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavbarComponent from "./Components/Navbar/navbar.component";
import { AuthContextProvider } from "./configFirebase";
const App = () => {
  return (
    <ReduxWrapper>
      <BrowserRouter>
        <AuthContextProvider>
          <NavbarComponent />
          <Switch>
            <Routes />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </ReduxWrapper>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
