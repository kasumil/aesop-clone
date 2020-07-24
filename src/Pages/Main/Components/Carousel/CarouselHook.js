import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [items, setItems] = useState([]);

  const handleInitData = () => {
    fetch("http://localhost:3000/data/mockdata.json")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        console.log(res.result);
        if (res.result === "SUCCESS") {
          setItems(res.data);
        }
      });
  };

  useEffect(() => handleInitData(), []);

  const [currentItemIdx, setCurrentItemIdx] = useState(0);

  const prevSlide = () => {
    console.log(currentItemIdx);
    console.log(items.length);
    const resetToVeryBack = currentItemIdx === 0;
    const index = resetToVeryBack ? items.length - 1 : currentItemIdx - 1;
    setCurrentItemIdx(index);
  };

  const nextSlide = () => {
    const resetIndex = currentItemIdx === items.length - 1;
    const index = resetIndex ? 0 : currentItemIdx + 1;
    setCurrentItemIdx(index);
  };

  const createSources = items.slice(currentItemIdx, currentItemIdx + 4);

  const itemsToDisplay =
    createSources.length < 4
      ? [...createSources, ...items.slice(0, 4 - createSources.length)]
      : createSources;

  const arrow = "25,31.3 4.2,10.5 0.1,14.6 25,39.5 50,14.6 45.9,10.5 ";

  return (
    <>
      <button
        className={currentItemIdx === 0 ? "prevBtn" : "prevBtnIsHidden"}
        onClick={prevSlide}
      >
        <svg role="img" viewBox="0 0 50 50">
          <g>
            <polygon points={arrow}></polygon>
          </g>
        </svg>
      </button>
      <div className="listedItem">
        {itemsToDisplay.map((el) => (
          <div className="eachItem">
            <img alt="" src={el.image_url} />
            <p>{el.product__name}</p>
            <p>{el.product__description}</p>
          </div>
        ))}
      </div>
      <button className="nextBtn" onClick={nextSlide}>
        <svg role="img" viewBox="0 0 50 50">
          <g>
            <polygon points={arrow}></polygon>
          </g>
        </svg>
      </button>
    </>
  );
};
export default Carousel;
