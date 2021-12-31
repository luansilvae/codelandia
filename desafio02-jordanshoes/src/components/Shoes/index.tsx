import React, { useEffect } from "react";
import Aos from "aos";

import "aos/dist/aos.css";
import style from "./shoes.module.scss";
interface Props {
  url: string;
  name: string
}

const Shoes: React.FC<Props> = ({ url, name }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up" data-aos-delay="200" className={style.Card}>
      <img src={url} alt="Jordan" />
      <span>{name}</span>
    </div>
  );
};

export default Shoes;
