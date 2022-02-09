import React from "react";
import { FiPlay } from "react-icons/fi";

import Header from "../../components/Header";
import illustration from "../../image/ilustracao.png";

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
            <h1 className={style.Title}>
              <span>HAYAO MIYAZAKI</span> A VIAGEM DE CHIHIRO
            </h1>

            <span>
              Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles
              que a desobedecem são transformados em animais.
            </span>

            <div className={style.ButtonsBox}>
              <a href="#">
                <span>
                  {" "}
                  <FiPlay /> Assistir agora
                </span>
              </a>
              <a href="#">
                <span>Assista ao trailer</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
