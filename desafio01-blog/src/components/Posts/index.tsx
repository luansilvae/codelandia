import React, { useEffect } from "react";
import { BiHeart } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";

import style from "./posts.module.scss";

interface Props {
  title: string;
  description: string;
  date: string;
}

const Posts: React.FC<Props> = ({ title, description, date }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-delay="200" className={style.Card}>
      <div className={style.Header}>
        <span data-aos="fade" data-aos-delay="400">
          {date}
        </span>
        <BiHeart size={25} />
      </div>

      <h1 data-aos="fade" data-aos-delay="500" >{title}</h1>
      <p data-aos="fade" data-aos-delay="600">{description}</p>
    </div>
  );
};

export default Posts;
