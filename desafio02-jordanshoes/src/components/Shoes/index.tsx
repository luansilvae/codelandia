import React from "react";

import style from "./shoes.module.scss";
interface Props {
  url: string;
  name: string
}

const Shoes: React.FC<Props> = ({ url, name }) => {
  return (
    <div className={style.Card}>
      <img src={url} alt="Jordan" />
      <span>{name}</span>
    </div>
  );
};

export default Shoes;
