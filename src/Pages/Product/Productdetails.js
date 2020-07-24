import React from "react";
import Nav from "../../Components/Nav";
import Aesoplogo from "../../Components/Aesoplogo";
import "./Productdetails.scss";

class Productdetails extends React.Component {
  render() {
    return (
      <section className="Productdetails">
        <Nav />
        <article className="details">
          <div className="logoAndImg">
            <div className="logoContainer">
              <div className="logo">
                <Aesoplogo />
              </div>
            </div>
            <div className="imageContainer">
              <img
                src="https://www.aesop.com/medias/Aesop-Skin-Remove-60mL-medium.png?context=bWFzdGVyfGltYWdlc3wyMzgyMzF8aW1hZ2UvcG5nfGltYWdlcy9oY2YvaDk1Lzg4MDUwNzI2NjY2NTQucG5nfDc1ZmRhYjhjY2UwZTNkODUzYzZkNjEzOTU0M2E1MTM5YWRkZTNkMjdkODk2ZTQxOTkzOWQ1YWNlZDJjYjhiYTc"
                alt="img
              "
              />
              <div>
                <span>60 mL</span>
              </div>
            </div>
          </div>
          <div className="productInfo">
            <div className="sort">
              <ul className="sortContainer">
                <li>스킨</li>
                <li className="circlePoint">립 & 아이</li>
              </ul>
            </div>
            <div className="productName">
              <h1 className="name">아이 리무버</h1>
            </div>
            <div className="productExplanation">
              <p className="explan">
                눈 주위의 민감한 피부를 달래고 진정시켜주는 마트리카리아가
                포함된 부드러운 오일 제형의 아이 메이크업 리무브
              </p>
            </div>
            <div className="infoContainer">
              <ul className="infoList">
                <li className="skinTypeBox">
                  <div className="skinType">피부 타입</div>
                  <div className="description">
                    모든 피부, 메이크업을 한 피부
                  </div>
                </li>
                <li className="usabilityBox">
                  <div className="usability">사용감</div>
                  <div className="description">진정된, 생기있는</div>
                </li>
                <li className="mainIngredientBox">
                  <div className="mainIngredient">주요 성분</div>
                  <div className="description">
                    그레이프 씨드, 토코페롤, 마트리카리아꽃오일
                  </div>
                </li>
              </ul>
              <div className="cartAdd">
                <button className="cartBtn">
                  <span>카트에 추가</span>
                  <span>-</span>
                  <span>₩ 30,000</span>
                </button>
              </div>
            </div>
          </div>
        </article>
        <article className="explanation">center</article>
        <article className="recommend">bottom</article>
      </section>
    );
  }
}

export default Productdetails;
