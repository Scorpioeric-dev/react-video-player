import React from "react";
import ReactPlayer from "./ReactPlayer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ReactPlayer} />
      <Route exact path="/:activeVideo" component={ReactPlayer} />
    </Switch>
  </BrowserRouter>
);

export default App;
