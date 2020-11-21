import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import CartMessage from "../../Components/Cart/CartMessage";
import OverlayIngredient from "./Components/OverlayIngredient";
import Aesoplogo from "../../Components/Aesoplogo";
import Footer from "../../Components/Footer/Footer";
import Recommendproduct from "./Components/Recommendproduct";
import Slider from "react-slick";
import * as productDetail_API from "../../config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Productdetails.scss";

export default function Productdetails() {
  const [item, setItem] = useState([])
  const [isToggleOn, setIsToggleOn] = useState(false)
  const [shownMessage, setShownMessage] = useState(false)
  const [sizeId, setSizeId] = useState(0)
  const [addIngredient, setAddIngredient] = useState(false)

  const addIngredientHandler = () => {
    setAddIngredient((prevState) => ({
      [addIngredient]: !prevState.addIngredient,
    }));
  };

  useEffect(()=> {
    fetch(`${productDetail_API}/board/read/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ item: res.data[0] }))
      .catch((e)=> console.log(e.message));
  }, [])

  useEffect(()=>{
    if (prevState.shownMessage !== shownMessage) {
      setShownMessage({ shownMessage: true });
    }
  }, [prevState])

  //카트에 아이템 추가시 서버에 post 보내기
  useEffect(()=>{
    addCartItem = () => {
      fetch({cartAPI}, {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("aesopToken"),
        },
        body: JSON.stringify({
          product_id: this.state.item.id,
          pricebysize_id: this.state.item.size[0].id,
          quantity: 1,
          isPlus: "True",
        }),
      })
      .then((res) => {res.json()});
      setShownMessage({ shownMessage: !shownMessage});
      setSizeId({sizeId: this.state.item.size[0].id});
    };
  })

  const settings = {
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <>
      {item.name && (
        <section
          className={
            this.state.addIngredient === true
              ? "darkTop Productdetails"
              : "lightTop Productdetails"
          }
        >
          {/* Top Details */}
          {addIngredient && (
            <OverlayIngredient ingredient={item.ingredient} />
          )}
          {shownMessage && <CartMessage />}
          <Nav sizeId={sizeId} />
          <article className="details">
            <div className="logoAndImg">
              <div className="logoContainer">
                <div className="logo">
                  <Aesoplogo />
                </div>
              </div>
              <div className="imageContainer">
                <img src={item.image_url} alt="img" />
                <div>
                  <span>{item.size[0].size}</span>
                </div>
              </div>
            </div>
            <div className="productInfo">
              <div className="sort">
                <ul className="sortContainer">
                  <li>
                    <Link to="/skin">스킨</Link>
                  </li>
                  <li className="circlePoint">{item.category_name}</li>
                </ul>
              </div>
              <div className="productName">
                <h1 className="name">{item.name}</h1>
              </div>
              <div className="productExplanation">
                <p className="explan">{item.description}</p>
              </div>
              <div className="infoContainer">
                <ul className="infoList">
                  <li className="skinTypeBox">
                    <div className="skinType">피부 타입</div>
                    <div className="description">
                      {item.skin_types.map((el) => {
                        const num = item.skin_types.length - 1;
                        const lastEl = item.skin_types[num];
                        if (el === lastEl) {
                          return `${el.name}`;
                        } else {
                          return `${el.name}, `;
                        }
                      })}
                    </div>
                  </li>
                  <li className="usabilityBox">
                    <div className="usability">사용감</div>
                    <div className="description">{item.usability}</div>
                  </li>
                  <li className="mainIngredientBox">
                    <div className="ingredientWrap">
                      <div className="mainIngredient">주요 성분</div>
                      <button
                        className={
                          addIngredient === true
                            ? "on moreBtn"
                            : "moreBtn"
                        }
                        onClick={addIngredientHandler}
                      >
                        <span className="moreBtnIcon">+</span>
                      </button>
                    </div>
                    <div className="description">{item.main_ingredient}</div>
                  </li>
                </ul>
                <div className="cartAdd">
                  <button className="cartBtn">
                    <span onClick={addCartItem}>
                      카트에 추가 — {item.size[0].price}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Center Explanation */}

          <article className="useExplanation">
            <section className="imgVedioContainer">
              <div className="imgBox">
                <img className="explanImg" src={item.sub_image_url} />
                <div className="vediobtnBox">
                  <button className="vedioBtn">
                    <div className="btnIconWrap">
                      <span className="iconBox">
                        <svg
                          aria-labelledby="c787461c-ce1d-4918-820f-3a3d5f4636bb"
                          className="iconPlay"
                          role="img"
                          viewBox="0 0 8 11"
                        >
                          <title id="c787461c-ce1d-4918-820f-3a3d5f4636bb">
                            재생
                          </title>
                          <g>
                            <polyline points="0,0 8,5.5 0,11"></polyline>
                          </g>
                        </svg>
                      </span>
                      <span className="btnText">비디오 보기</span>
                    </div>
                  </button>
                </div>
              </div>
            </section>
            <section
              className={
                isToggleOn === true
                  ? "dark explanationContainer"
                  : "light explanationContainer"
              }
            >
              <ul className="explanList">
                <li className="howToUse">
                  <spna>사용법</spna>
                  <h2>{item.method}</h2>
                </li>
                <li className="useAmountBox">
                  <div className="useAount">사용량</div>
                  <div className="description">{item.amount}</div>
                </li>
                <li className="textureBox">
                  <div className="texture">텍스처</div>
                  <div className="description">{item.texture}</div>
                </li>
                <li className="scentBox">
                  <div className="scent">향</div>
                  <div className="description">{item.scent}</div>
                </li>
              </ul>
            </section>
          </article>

          {/* Bottom Recommend */}
          <article className="recommend">
            <div className="recommendIntro">
              <h2 className="introTitle">함께 사용하면 좋은 제품</h2>
              <div className="content">
                <p>{item.recommendation_description}</p>
              </div>
            </div>
            <div className="prodcutContainer">
              <div className="productWrapper">
                <Slider {...settings}>
                  {item &&
                    item.recommendation_items.map((product) => (
                      <Recommendproduct
                        id={product.id}
                        // title={product.title}
                        // content={product.content}
                        name={product.product}
                        image={product.image_url}
                      />
                    ))}
                </Slider>
              </div>
            </div>
            <div className="progressBar"></div>
          </article>
          <Footer />
        </section>
      )}
    </>
  );
}