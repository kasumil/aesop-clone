import React, { useEffect, useState } from "react";
import CitrusFeed from "./Components/CitrusFeed/CitrusFeed";
import Carousel from "./Components/Carousel/Carousel";
import Appointment from "./Components/Appointment/Appointment";
import Store from "./Components/Store/Store";
import Quote from "./Components/Quote/Quote";
import Footer from "../../Components/Footer/Footer";
import "./Main.scss";

export default function Main() {
  const [firstFeed, setFirstFeed] = useState(false)
  const [secondFeed, setSecondFeed] = useState(false)
  const [thirdFeed, setThirdFeed] = useState(false)
  const [fourthFeed, setFourthFeed] = useState(false)

  useEffect(() => {
    componentDidMount = () => {
      window.addEventListener("scroll", this.listenScrollEvent)};
    componentWillUnmount = () => {
      window.removeEventListener("scroll", this.listenScrollEvent)};
  })

  const listenScrollEvent = () => {
    if (window.scrollY > 220) {
      setFirstFeed({ firstFeed: true });
    }

    if (window.scrollY > 1000) {
      setSecondFeed({ secondFeed: true });
    }

    if (window.scrollY > 1750) {
      setThirdFeed({ thirdFeed: true });
    }

    if (window.scrollY > 2300) {
      setFourthFeed({ fourthFeed: true });
    }
  };

  return (
    <div className="Main">
      <CitrusFeed />
      <Carousel firstFeed={firstFeed} />
      <Appointment secondFeed={secondFeed} />
      <Store thirdFeed={thirdFeed} />
      <Quote fourthFeed={fourthFeed} />
      <Footer />
    </div>
  );
}