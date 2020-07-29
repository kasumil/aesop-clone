import React from "react";
import { aesopLogoPath } from "../../config";
import "./Cart.scss";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      showSelectBox: false,
      selectedQuantity: 0,
      cartShown: true,
    };
  }

  openSelectBox = () => {
    this.setState({ showSelectBox: true });
  };

  closeSelectBox = (id) => {
    this.setState({
      showSelectBox: false,
      selectedQuantity: id,
    });
    // 수량수정시 POST
    // fetch("", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     cart_id: "",
    //     quantity: id,
    //   })
    //     .then((res) => res.json)
    //     .then((res) => localStorage.getItem("access_token", res.access_token)),
    // });
  };

  closeCart = () => {
    this.setState({ cartShown: false });
  };
  render() {
    const { showSelectBox, selectedQuantity, cartShown } = this.state;
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
              <div className="cartAdded">
                <div className="productName">아이 리무버</div>
                <div className="productSize">60mL</div>
                <div className="productCount">
                  {selectedQuantity === 0 && (
                    <ul
                      className={
                        showSelectBox ? "selectClicked" : "selectQuantity "
                      }
                    >
                      <li onClick={() => this.closeSelectBox(1)}>
                        1
                        <svg
                          role="img"
                          viewBox="0 0 50 50"
                          onClick={this.openSelectBox}
                        >
                          <g>
                            <polygon
                              points={aesopLogoPath.slideArrow}
                            ></polygon>
                          </g>
                        </svg>
                      </li>
                      <li onClick={() => this.closeSelectBox(2)}>2</li>
                      <li onClick={() => this.closeSelectBox(3)}>3</li>
                      <li onClick={() => this.closeSelectBox(4)}>4</li>
                      <li onClick={() => this.closeSelectBox(5)}>5</li>
                    </ul>
                  )}
                  {selectedQuantity !== 0 && (
                    <ul
                      className={
                        showSelectBox ? "selectClicked" : "selectQuantity "
                      }
                    >
                      <li className="setValue">
                        {selectedQuantity}
                        <svg
                          role="img"
                          viewBox="0 0 50 50"
                          onClick={this.openSelectBox}
                        >
                          <g>
                            <polygon
                              points={aesopLogoPath.slideArrow}
                            ></polygon>
                          </g>
                        </svg>
                      </li>
                      <div className="numList">
                        <li onClick={() => this.closeSelectBox(1)}>1</li>
                        <li onClick={() => this.closeSelectBox(2)}>2</li>
                        <li onClick={() => this.closeSelectBox(3)}>3</li>
                        <li onClick={() => this.closeSelectBox(4)}>4</li>
                        <li onClick={() => this.closeSelectBox(5)}>5</li>
                      </div>
                    </ul>
                  )}
                </div>
                <div class="productPrice">₩ 30,000</div>
              </div>
            </div>
            <div className="cartSummary">
              <span>전 제품 무료 배송 혜택을 즐겨보세요.</span>
              <div className="totalPrice">
                <span>소계(세금 포함)</span>
                <span className="sum">₩ 113,000</span>
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
