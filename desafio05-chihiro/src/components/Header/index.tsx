import React from "react";
import { FiInstagram, FiFacebook, FiYoutube, FiTwitter } from "react-icons/fi";

import logo from "../../image/logo.svg";
import style from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={style.Container}>
      <img src={logo} alt="Studio Ghibli" width={100}/>

      <ul className={style.Links}>
        <li>
          <FiFacebook />
        </li>
        <li>
          <FiInstagram />
        </li>
        <li>
          <FiTwitter />
        </li>
        <li>
          <FiYoutube />
        </li>
      </ul>
    </div>
  );
};

export default Header;
