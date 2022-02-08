import React from "react";

import Header from "../../components/Header";
import illustration from "../../image/ilustracao.png";
import watchButton from "../../image/botao-1.svg";
import watchTrailer from "../../image/botao-2.svg";

import style from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <div className={style.Wrapper}>
        <div className={style.MainContent}>
          <img
            className={style.Illustration}
            src={illustration}
            alt="A Viagem de Chihiro"
          />

          <div className={style.Intro}>
            <div className={style.Title}>
              <h1>A VIAGEM DE CHIHIRO</h1>
              <h2>HAYAO MIYAZAKI</h2>
            </div>

            <span>
              Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles
              que a desobedecem são transformados em animais.
            </span>

            <div className={style.ButtonsBox}>
              <a href="#">
                <img src={watchButton} alt="Assistir agora" />
              </a>
              <a href="#">
                <img src={watchTrailer} alt="Assistir agora" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
