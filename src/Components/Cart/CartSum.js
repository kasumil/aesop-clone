import React, { useState } from "react";
import "./CartSum.scss";

export default function CartSum() {
  const [ showSelectBox, setShowSelectBox ] = useState(false)
  const [ selectedQuantity, setSelectedQuantity ] = useState(0)

  render() {
    const x = totalSum;
    return (
      <div className="cartSummary">
        <span>전 제품 무료 배송 혜택을 즐겨보세요.</span>
        <div className="totalPrice">
          <span>소계(세금 포함)</span>
          <span className="sum">₩ </span>
        </div>
        <button className="payBtn">결제하기</button>
      </div>
    );
  }
}
