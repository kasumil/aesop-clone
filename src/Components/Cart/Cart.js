import React from "react";
import CartList from "./CartList";
// import CartSum from "./CartSum";
import { aesopLogoPath } from "../../config";
import { cartAPI } from "../../config";
import "./Cart.scss";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartShown: true,
      showSelectBox: false,
      selectedQuantity: 0,
      cartData: [],
      totalSum: 0,
    };
  }

  //서버에서 카트 정보 받아오기 GET
  componentDidMount() {
    fetch(cartAPI, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("aesopToken"),
      },
    })
      .then((res) => res.json())
      .then((res) => this.setState({ cartData: res.data }));
  }

  closeCart = () => {
    this.setState({ cartShown: false });
  };

  render() {
    const productId = this.props.productId;
    const { cartShown } = this.state;
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
                  <button className="btnContainer" onClick={this.closeCart}>
                    <svg class="Icon" role="img" viewBox="0 0 50 50">
                      <g>
                        <polygon points={aesopLogoPath.closeBtn}></polygon>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>

              {this.state.cartData.map((el, idx) => {
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

export default Cart;
