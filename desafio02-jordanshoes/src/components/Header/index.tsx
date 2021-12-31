import React from "react";
import BlackBar from "../BlackBar";
import style from "./header.module.scss";

import Typed from "react-typed";

const Header: React.FC = () => {
  return (
    <div className={style.Container}>
      <BlackBar title="Ganhe R$ 10,00 de desconto no frete" />

      <div className={style.Brand}>
        <h1>JordanShoes</h1>
      </div>

      <div className={style.HeaderContent}>
        <h2>A melhor loja de Jordan</h2>
        <Typed className={style.Text}
          strings={[
            "O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.",
          ]}
          typeSpeed={40}
        />
      </div>
    </div>
  );
};

export default Header;
