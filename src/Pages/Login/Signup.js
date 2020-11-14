import React, { useState } from "react";
import * as signUpAPI from "../../config";
import { useHistory } from "react-router-dom";
import "./Signup.scss";

export default function Signup() {
  const [ email, setEamil ] = useState('')
  const [ pw, setPw ] = useState('')
  const [ pwconfirm, setPwonfirm ] = useState('')
  const [ firstname, setFirstname ] = useState('')
  const [ lastname, setLastname ] = useState('')
  const [ pwError, setPwError ] = useState(false)

  const { history } = useHistory

  const hadleValueEmail = (e) => {
    setEamil({ [email]: e.target.value})};

  const hadleValuePW = (e) => {
    setPw({[pw]: e.target.value})};

  const hadleValuepwConFirm = (e) => {
    setPwonfirm({[pwconfirm]: e.target.value});
    if (e.target.value.length > 0) {
      if (e.target.value.value === pw) {
        setPwError({ [pwError]: false });
      } else {
        setPwError({ [pwError]: true });
      }
    }
  };

  const hadleValueFirstName = (e) => {
    setFirstname({[firstname]: e.target.value})
  };

  const hadleValueLastName = (e) => {
    setLastname({[lastname]: e.target.value})
  };

  const handleSingUP = (e) => {
    fetch(signUpAPI, {
      method: "POST",
      body: JSON.stringify({
        [email]: email,
        [password]: pw,
        [first_name]: firstname,
        [last_name]: lastname,
      }),
    })
    .then((res) => res.json())
    .then((res) => {
      if (res.token) {
        localStorage.setItem("aesop", res.token);
        alert("회원가입을 환영합니다.");
        history.push("/");
      } else {
        alert("이메일과 비밀번호를 확인해주세요.");
      }
    })
    .catch((e)=> console.log(e.message));
  };

  const handleHaveAccount = (e) => {history.push("/Login")};

  return(
    <div className="Signup">
      <form className="loginForm">
        <div className="modalheadingWrap">
          <h2 className="modalTitle">
            처음 만나 뵙게 되네요. 이솝에 오신 것을 환영합니다.
          </h2>
          <div className="modalSubTitle">
            계정을 만들려면 아래에 세부 정보를 입력하십시오.
          </div>
        </div>
        <div className="formRow">
          <div className="formText">
            <label>
              <input
                onChange={(e)=>{hadleValueEmail}}
                className="formTextInput"
                name="email"
                placeholder="이메일 주소"
                type="email"
              />
              {/* <span className="FormTextlabel">이메일 주소</span> */}
            </label>
          </div>
        </div>
        <div>
          <div className="formRow">
            <div className="formText">
              <label>
                <input
                  onChange={(e)=>{hadleValuePW}}
                  className="formTextInput"
                  name="password"
                  placeholder="패스워드"
                  type="password"
                />
                {/* <span className="FormText-label">패스워드</span> */}
              </label>
            </div>
          </div>
          <div className="formRow">
            <div className="formText">
              <label>
                <input
                  onChange={(e)=>{hadleValuepwConFirm}}
                  className="formTextInput"
                  name="passwordConfirm"
                  placeholder="패스워드 확인"
                  type="password"
                />
                <div
                  className={
                    pwError
                      ? "errorMessage"
                      : "noneErrorTextMessage"
                  }
                >
                  이전에 사용했던 패스워드를 입력하세요.
                </div>
                {/* <span className="FormText-label">패스워드 확인</span> */}
              </label>
            </div>
          </div>
          <div className="formRowbox">
            <div className="formTextLoginName">
              <label>
                <input
                  onChange={(e)=>{hadleValueFirstName}}
                  className="formTextInput"
                  maxLength="100"
                  name="firstName"
                  placeholder="성"
                  type="text"
                />
                {/* <span className="FormText-label">성</span> */}
              </label>
            </div>
            <div className="formTextLoginName">
              <label>
                <input
                  onChange={(e)=>{hadleValueLastName}}
                  className="formTextInput"
                  maxLength="100"
                  name="LastName"
                  placeholder="이름"
                  type="text"
                />
                {/* <span className="FormText-label">이름</span> */}
              </label>
            </div>
          </div>
        </div>
        <button
          onClick={(e)=>{handleSingUP}}
          className={
            email.length > 5 &&
            pw === pwconfirm &&
            firstname.length >= 1 &&
            lastname.length >= 1
              ? "btnSignUPActive"
              : "btnSignUPunActive"
          }
          type="submit"
        >
          <div className="btnContent">
            <span className="btnLabel">등록</span>
          </div>
        </button>
        <div className="loginHaveAccount">
          <button
            onClick={(e)=>{handleHaveAccount}}
            className="loginHaveAccountBTN"
          >
            이솝 계정을 가지고 계십니까?
          </button>
        </div>
      </form>
    </div>
  );
}


