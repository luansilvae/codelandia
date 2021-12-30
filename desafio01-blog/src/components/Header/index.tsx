import React from "react";
import { FaSearch } from "react-icons/fa";

import style from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={style.Container}>
      <div className={style.HeaderWrapper}>
        <div className={style.Nav}>
          <a
            href="https://www.figma.com/file/Yb9IBH56g7T1hdIyZ3BMNO/Desafios---Codel%C3%A2ndia?node-id=139%3A51"
            target="_blank"
          >
            Codelândia
          </a>
          <span>blog</span>
        </div>

        <form className={style.Search}>
          <span>
            <FaSearch size={18} color="#fff" />
          </span>
          <input type="text" placeholder="Pesquisar no blog" />
        </form>
      </div>
    </div>
  );
};

export default Header;
