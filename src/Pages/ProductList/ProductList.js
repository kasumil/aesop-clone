import React from "react";
import "./ProductList.scss";

class ProductList extends React.Component {
  render() {
    return (
      <div className="ProductList">
        <section className="productListContainer">
          <div className="productTitleBox">
            <h1 className="productTitle">스킨</h1>
          </div>
          <div className="productFilterContainer">
            <div className="productFilterBox">
              <ul className="productFilterNav">
                <li>
                  <span className="start">모든 스킨</span>
                </li>
                <li>
                  <span>클렌저</span>
                </li>
                <li>
                  <span>각질 제거</span>
                </li>
                <li>
                  <span>트리트먼트 & 마스크</span>
                </li>
                <li>
                  <span>토너</span>
                </li>
                <li>
                  <span>하이드레이터</span>
                </li>
                <li>
                  <span>립 & 아이</span>
                </li>
                <li>
                  <span>쉐이빙</span>
                </li>
                <li>
                  <span>선 케어 / SPF</span>
                </li>
                <li>
                  <span>키트</span>
                </li>
                <li>
                  <span>스킨케어 세트 추천</span>
                </li>
                <li>
                  <span>스킨 케어 기프트</span>
                </li>
              </ul>
              <div className="productFilter">
                <button className="filterBtn">
                  <div className="filterBox">
                    <span>필터</span>
                    <svg class="btnIcon" role="img" viewBox="0 0 50 50"><g><polygon points="25,31.3 4.2,10.5 0.1,14.6 25,39.5 50,14.6 45.9,10.5 "></polygon></g></svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ProductList;
