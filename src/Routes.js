import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import ProductList from "./Pages/ProductList/ProductList";
import Productdetails from "./Pages/Product/Productdetails";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/skin" component={ProductList} />
          <Route exact path="/skin/details" component={Productdetails} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
