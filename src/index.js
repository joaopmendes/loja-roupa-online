import React from "react";
import ReactDOM from "react-dom";
import ReduxWrapper from "./redux/store.config";
import { BrowserRouter, Switch } from "react-router-dom";
import { Routes } from "./router.config";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavbarComponent from "./Components/Navbar/navbar.component";
import { AuthContextProvider } from "./firebase.config";
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
