import React from "react";
import CitrusFeed from "./CitrusFeed";
import ItemSlide from "./ItemSlide";
import Appointment from "./Appointment";
import Store from "./Store";
import Quote from "./Quote";
import Footer from "./Footer";
import "./Main.scss";

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <CitrusFeed />
        <ItemSlide />
        <Appointment />
        <Store />
        <Quote />
        <Footer />
      </div>
    );
  }
}

export default Main;
