import React from "react";
import "./Header.css";
import logo from "../logo.png";

export default function Header() {
  return (
    <header>
      <div className="header--logo">
        <a href="/">
          <img src={logo} alt="logo netflix"></img>
        </a>
      </div>

      <div className="header--user">
        <a href="/">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt="user-logo"
          ></img>
        </a>
      </div>
    </header>
  );
}
