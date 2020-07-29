import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import Mapcomponent from "./Pages/Productmap/Mapcomponent";
import ProductList from "./Pages/ProductList/ProductList";
import Productdetails from "./Pages/Product/Productdetails";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/mapcomponent" component={Mapcomponent} />
          <Route exact path="/skin" component={ProductList} />
          <Route exact path="/skin/details" component={Productdetails} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
