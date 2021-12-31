import React from "react";

import style from "./card.module.scss";

const Card: React.FC = () => {
  return (
    <div className={style.Box}>
      <div className={style.Thumb} />
      <div className={style.Content}>
        <h2>Título do card</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
          neque et nisl.
        </p>
      </div>
    </div>
  );
};

export default Card;
