import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as loginAPI from "../../config";
import "./Login.scss";

export default function Login() {
  const [email, setEmail ] = useState('')
  const [pw, setPw] = useState('')

  const history = useHistory()

  const hadleValueID = (e) => {
    setEmail({[email]: e.target.value})};

  const hadleValuePW = (e) => {
    setPw({[pw]: e.target.value})};

  // 로그인용 버튼
  const hadleBtn = (e) => {
    fetch(loginAPI, {
      method: "POST",
      body: JSON.stringify({
        [email]: email,
        [password]: pw,
      }),
    })
    .then((res) => res.json())
    .then((res) => {
      if (res.token) {
        localStorage.setItem("aesopToken", res.token);
        //로그인시 nav에 email 전달하는 함수 (부모에게 전달)
        this.props.showID(email);
        this.props.handleLogin();
      }
    })
    .catch((e) => console.log(e.message))
    .finally(console.log('로그인 정상작동'))
  };

  // 회원가입용
  const handleSignUp = (e) => {
    history.push("/signup");
  };

return (
  <div className="Login">
    <div className="modalBody">
      <div className="introduceBox">
        <h2 className="loginTitle">안녕하세요.</h2>
        <div className="loginSub">유효한 이메일 주소를 입력하세요</div>
      </div>
      <div className="formText">
        <label>
          <input
            onChange={hadleValueID}
            className="formTextInput"
            name="email"
            placeholder="이메일 주소"
          />
          {/* <span className="FormTextLabel">이메일 주소</span> 이부분은 애니메이션이 요구됨. 해결방안이 시급. */}
        </label>
      </div>
      <div className="formText">
        <input
          onChange={hadleValuePW}
          className="formTextInput"
          type="Password"
          placeholder="비밀번호"
        />
      </div>
      <button
        onClick={hadleBtn}
        type="button"
        className={
          email.length > 5 && pw.length > 5
            ? "activeBTN"
            : "unactiveBTN"
        }
      >
        <div className="btnContent">로그인</div>
      </button>
      <button
        onClick={handleSignUp}
        type="button"
        className="signUpcolor"
      >
        <div className="signUpBtn">회원가입</div>
      </button>
    </div>
  </div>
);
}

