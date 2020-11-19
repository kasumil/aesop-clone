import React from "react";
import "./Store.scss";

export default function Store() {
  return (
    <div className="Store">
      <div className="storeContent">
        <p className="storeTitle1">방문</p>
        <p className="storeTitle2">신규 스토어: 이솝 롯데 수지</p>
        <p>
          최근에 오픈한 이솝 스토어에서 소중한 사람을 위한 시즈널 기프트를
          만나보세요.
        </p>
        <div className="detailLink">
          <div className="detailContent">
            스토어 구경하기
            <svg className="linkIcon" role="img" viewBox="0 0 50 50">
              <g>
                <path d="M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="storeImg">
        <img
          className="storeLotteImg"
          alt="store Lotte in Suji"
          src="https://www.aesop.com/medias/Aesop-Suji-Carousel-1-Tablet-1400x788px.jpg?context=bWFzdGVyfGltYWdlc3wyMjc0NjR8aW1hZ2UvanBlZ3xpbWFnZXMvaDU5L2g1My85MTY4NzA1Mzg4NTc0LmpwZ3xkYzg2ZWQ3NTg0YTgzODVjNTdhMzg3YTljMDk4OWQxMjY1NTYwMDE4ZmI3N2MwODAwNWM2MjI5MGEwMGVmMTdm"
        />
        <p>이솝 롯데 수지</p>
      </div>
    </div>
  );
}