import React from "react";
import { Switch, Route } from "react-router-dom";
import Body from "../components/Body";
import Bg from "../pages/Bg";

function Index() {
  return (
    <Switch>
      <Route path="/" exact component={Bg} />
      <Route path="/body" exact component={Body} />
    </Switch>
  );
}

export default Index;
