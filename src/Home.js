import React from "react";
import { Route, Link, Switch } from "react-router-dom";

export default function Home(props) {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/pizza">Pizza</Link>
      <h1>This Be The Home Still Under Construction</h1>
    </div>
  );
}
