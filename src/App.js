import React from "react";
import Form from "./Pizza";
import Home from "./Home";
import { Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/pizza">
          <Form />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
