import React from "react";
import ReactDOM from "react-dom";
import { FirebaseWrapper } from "./configFirebase";
import ReduxWrapper from "./redux/configStore";
import { BrowserRouter, Switch } from "react-router-dom";
import { Routes } from "./configRouter";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const App = () => {
  return (
    <ReduxWrapper>
      <FirebaseWrapper>
        <BrowserRouter>
          <Switch>
            <Routes />
          </Switch>
        </BrowserRouter>
      </FirebaseWrapper>
    </ReduxWrapper>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
