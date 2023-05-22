import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "./img/35mm-16x16.png";

const Navigation = () => {
  //image를 import하는 대신 require(path)를 통해 변수에 저장해준다.
  //   const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

  return (
    <nav className="nav">
      <div className="nav-logo">
        <Link to="/main">
          <img src={logo} />
        </Link>
      </div>
      
      <div className="nav-logo">
        <Link to="/saleshop">Shop</Link>
      </div>

      {/* <div className="nav-board">
        <Link to="/board">게시판</Link>
      </div>

      {!isLoggedIn? (
        <div className="nav-login">
          <Link to="/login" className="logIn-button">
            로그인
          </Link>
        </div>
      ) : (
        <>
          <div className="nav-user">
            <Link to="/mypage" className="nav-mypage">
              마이페이지
            </Link>
          </div>
          <button className="logOut-button">로그아웃</button>
        </>
      )}  */}
    </nav>
  );
};

export default Navigation;
