import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import SearchResults from "./SearchResults";
import ItemDetail from "./ItemDetail";

const BasicExample = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/search/:searchTerm?" component={SearchResults} />
      <Route path="/detail" component={ItemDetail} />
    </React.Fragment>
  </Router>
);
export default BasicExample;
