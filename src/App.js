import Navbar from "./components/navbar/navbar.js";

import Country from "./components/pages/country.js";
import Home from "./components/pages/home.js";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" component={Country} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
