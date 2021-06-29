import React from "react";
import { Route, Switch } from "react-router-dom";

import Hero from "./components/Hero";
import Error from "./components/Error";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route component={Error} />
      </Switch>
    </>
  );
}