import React from "react";
import { FaSearch } from 'react-icons/fa'

import style from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={style.Container}>
      <div className={style.HeaderWrapper}>
        <div className={style.Nav}>
          <a href="#">Codelândia</a>
          <span>blog</span>
        </div>

        <form className={style.Search}>
          <span><FaSearch size={15} color="#fff"/></span>
          <input type="text" placeholder="Pesquisar no blog" />
        </form>
      </div>
    </div>
  );
};

export default Header;
