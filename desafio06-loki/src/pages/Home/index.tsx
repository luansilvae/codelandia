import React from "react";
import { FiClock } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

import Capa from "../../images/capa.png";

import style from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={style.Container}>
      <h1 className={style.Title}>
        <span>ESTÁ DISPONÍVEL AGORA!</span>
        LOKI
      </h1>

      <div className={style.Info}>
        <figure className={style.Image}>
          <img src={Capa} alt="Loki" />
        </figure>

        <div className={style.Actions}>
          <div className={style.Details}>
            <div className={style.Time}>
              <span>
                <FiClock />
                51min
              </span>

              <span>2021</span>
            </div>

            <div className={style.Stars}>
              {[0, 1, 2, 3, 4].map((index) => (
                <FaStar key={index} size={20} />
              ))}
            </div>
          </div>

          <div className={style.Buttons}>
            <a href="#">Assistir Agora</a>
            <a href="#">Trailer</a>
          </div>

          <p className={style.Description}>
            Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston)
            retoma seu papel como o Deus do Mal em uma nova série que ocorre
            após os eventos de “Vingadores: Endgame”.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
