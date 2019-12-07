import React from "react";
import ReactDOM from "react-dom";
import { FirebaseWrapper } from "./configFirebase";
import ReduxWrapper from "./redux/configStore";
import { BrowserRouter, Switch } from "react-router-dom";
import { Routes } from "./configRouter";
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
