import React from "react";
import "./Nav.scss";

export default function Nav() {
  return (
    <header className="Nav">
      <ul className="navList">
        <div className="navLeft">
          <li>
            <a href="/shop">제품보기</a>
          </li>
          <li>
            <a href>읽기</a>
          </li>
          <li>
            <a href>스토어</a>
          </li>
          <li>
            <a href>검색</a>
          </li>
        </div>
        <div className="navRight">
          <li>
            <a href>로그인</a>
          </li>
        </div>
      </ul>
    </header>
  );
}

