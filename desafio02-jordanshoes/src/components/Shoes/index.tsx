import React from "react";

import style from "./shoes.module.scss";

interface Props {
  url: string;
}

const Shoes: React.FC<Props> = ({ url }) => {
  return (
    <div className={style.Card}>
      <img src={url} alt="Jordan" />
    </div>
  );
};

export default Shoes;
