import React, { useState } from "react";
import { FiPlay } from "react-icons/fi";
import ModalVideo from "react-modal-video";

import Header from "../../components/Header";
import illustration from "../../image/ilustracao.png";

import style from "./Home.module.scss";
import "react-modal-video/scss/modal-video.scss";

const Home: React.FC = () => {
  const [isOpen, setOpen] = useState(false)
  
  return (
    <main>
      <Header />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="ByXuk9QqQkk"
        onClose={() => setOpen(false)}
      />
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
              <a href="https://www.netflix.com/br/title/60023642" target="_blank">
                <span>
                  <FiPlay /> Assistir agora
                </span>
              </a>
              <a href="#" onClick={()=> setOpen(true)}>
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
