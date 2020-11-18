import React, { useEffect, useState } from "react";
import CartList from "./CartList";
// import CartSum from "./CartSum";
import { aesopLogoPath } from "../../config";
import { cartAPI } from "../../config";
import "./Cart.scss";

export default function Cart() {
  const [cartShown setCartShown] = useState(true)
  const [showSelectBox setShowSelectBox] = useState(false)
  const [selectedQuantity setSelectedQuantity] = useState(0)
  const [cartData setCartData] = useState([])
  const [totalSum setTotalSum] = useState(0)

  //서버에서 카트 정보 받아오기 GET
  useEffect(() => {
    fetch(cartAPI, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("aesopToken"),
      },
    })
    .then((res) => res.json())
    .then((res) => setCartData({[cartData]: res.data })
    )
    .catch((e)=> console.log(e.message));
  }, [])
    

  const closeCart = () => {
    setCartShown({ [cartShown]: false })};

  render() {
    const productId = productId;
    const { cartShown } = cartShown
    const functionB = (x) => {
      return x;
    };

    return (
      <>
        {cartShown && (
          <section className="Cart">
            <div className="cartList">
              <div className="cartInfo">
                <div className="cartTitle">카트</div>
                <div className="cartSize">사이즈</div>
                <div className="cartQuantity">수량</div>
                <div class="cartBtn">
                  <button className="btnContainer" onClick={closeCart}>
                    <svg class="Icon" role="img" viewBox="0 0 50 50">
                      <g>
                        <polygon points={aesopLogoPath.closeBtn}></polygon>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>

              {cartData.map((el, idx) => {
                const productName = el.product;
                const productSize = el.size;
                const productPrice = el.price;
                const cartId = idx;

                return (
                  <>
                    <CartList
                      productName={productName}
                      productSize={productSize}
                      productPrice={productPrice}
                      cartId={cartId}
                      functionB={functionB}
                    />
                  </>
                );
              })}
            </div>
            <div className="cartSummary">
              <span>전 제품 무료 배송 혜택을 즐겨보세요.</span>
              <div className="totalPrice">
                <span>소계(세금 포함)</span>
                <span className="sum">₩ {functionB()} </span>
              </div>
              <button className="payBtn">결제하기</button>
            </div>
          </section>
        )}
      </>
    );
  }
}

