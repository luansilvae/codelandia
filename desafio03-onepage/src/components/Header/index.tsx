import React from "react";
import Illustration from "../../assets/images/illustration.svg";

import style from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={style.Container}>
      <div className={style.Top}>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
          massa sit amet augue consectetur ullamcorper non ac massa.
        </p>
        <button>Botão</button>
      </div>

      <img src={Illustration} alt="Illustration" />
    </div>
  );
};

export default Header;
