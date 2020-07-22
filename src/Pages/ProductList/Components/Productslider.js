import React from "react";
import Product from "./Product";
import Slider from "react-slick";
import Sliderintro from "./Sliderintro";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Productslider.scss";

class Productslider extends React.Component {
  state = {
    cpid: 0,
  };

  render() {
    const { products } = this.props;
    const settings = {
      infinite: false,
      speed: 300,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
    };

    return (
      <div>
        {products.map((el, i) => {
          console.log(this.state.cpid);
          return (
            <div className="Productslider">
              <section
                className={
                  i % 2 === 0 ? "evenSliderContainer" : "oddSliderContainer"
                }
              >
                <Sliderintro
                  cpid={el.info.cpid}
                  catagoryname={el.info.catagoryname}
                  catagorydescription={el.info.catagorydescription}
                  catagoryallview={el.info.catagoryallview}
                />
                <div className="sliderContents">
                  <div className="sliderContensWrap">
                    <Slider {...settings}>
                      {el.products.map((el) => (
                        <Product
                          id={el.id}
                          name={el.name}
                          size={el.size}
                          price={el.price}
                          image={el.image}
                        />
                      ))}
                    </Slider>
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Productslider;
