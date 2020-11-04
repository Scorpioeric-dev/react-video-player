import React from "react";
import ReactPlayer from "./ReactPlayer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";

const App = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={ReactPlayer} />
        <Route exact path="/:activeVideo" component={ReactPlayer} />
      </Switch>
      <GlobalStyle />
    </>
  </BrowserRouter>
);

export default App;
