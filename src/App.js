import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import pages
import Home from "./pages/Home";
import Error from "./pages/Error";
//import components
import Navbar from "./components/Navbar";
import { Products } from "./ProductData";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="cocktail/:id">
            <SingleCocktail />
          </Route> */}
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Products />
      </Router>
    </div>
  );
}

export default App;
