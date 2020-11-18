import React, { useState } from "react";
import { aesopLogoPath } from "../../config";
import { cartAPI } from "../../config";
import "./CartList.scss";

export default function CartList() {
  const [ showSelectBox, setShowSelectBox ] = useState(false)
  const [ selectedQuantity, setSelectedQuantity ] = useState(0)
  const [ totalPrice, setTotalPrice ] = useState(0)
  const [ totalSum, setTotalSum ] = useState(0)

  const openSelectBox = () => {
    setShowSelectBox({ [showSelectBox]: true });
  };

  const closeSelectBox = (count) => {
    // 수량변경시 가격변화
    const itemPrice = productPrice;
    const intPrice = itemPrice.replace("₩", "").replace(",", "");
    const totalPrice = intPrice * count;

    //서버에 수량변경 전달
    fetch(cartAPI, {
      method: "POST",
      headers: { Authorization: localStorage.getItem("aesopToken") },
      body: JSON.stringify({
        cart_id: cartId + 1,
        quantity: count,
        isPlus: "False",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "success") {
          fetch(cartAPI, {
            method: "GET",
            headers: { Authorization: localStorage.getItem("aesopToken") },
          })
            .then((res) => res.json())
            .then((res) => this.setState({ totalSum: res.total }));
        }
      }
      .catch((e) => console.log(e.message))
      );
      setShowSelectBox({[showSelectBox]: false})
      setSelectedQuantity({[selectedQuantity]: count})
      setTotalPrice({[totalPrice]: totalPrice})
    });
  };

  render() {
    functionB(totalSum);
    return (
      <>
        <div className="cartAdded" id={cartId}>
          <div className="productName">{productName}</div>
          <div className="productSize">{productSize}</div>
          <div className="productCount">
            {selectedQuantity === 0 && (
              <ul
                className={showSelectBox ? "selectClicked" : "selectQuantity "}
                id={cartId}
              >
                <li onClick={() => closeSelectBox(1)}>
                  0
                  <svg
                    className="cartArrow"
                    role="img"
                    viewBox="0 0 50 50"
                    onClick={openSelectBox}
                  >
                    <g>
                      <polygon points={aesopLogoPath.slideArrow}></polygon>
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
                className={showSelectBox ? "selectClicked" : "selectQuantity "}
                id={cartId}
              >
                <li className="setValue">
                  {selectedQuantity}
                  <svg
                    className="cartArrow"
                    role="img"
                    viewBox="0 0 50 50"
                    onClick={sopenSelectBox}
                  >
                    <g>
                      <polygon points={aesopLogoPath.slideArrow}></polygon>
                    </g>
                  </svg>
                </li>
                <div className="numList">
                  <li id="1" onClick={() => this.closeSelectBox(1)}>
                    1
                  </li>
                  <li id="2" onClick={() => this.closeSelectBox(2)}>
                    2
                  </li>
                  <li id="3" onClick={() => this.closeSelectBox(3)}>
                    3
                  </li>
                  <li id="4" onClick={() => this.closeSelectBox(4)}>
                    4
                  </li>
                  <li id="5" onClick={() => this.closeSelectBox(5)}>
                    5
                  </li>
                </div>
              </ul>
            )}
          </div>
          <div class="productPrice"> ₩ {totalPrice}</div>
        </div>
      </>
    );
  }
}

