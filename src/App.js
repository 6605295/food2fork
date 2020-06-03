// food2fork website is shutdown so the new source of api is
// https://recipesapi.herokuapp.com/

import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import Singlerecipepage from "./Pages/Singlerecipepage";
import Default from "./Pages/Default";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="/recipes/:id" component={Singlerecipepage} />
          <Route component={Default} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
