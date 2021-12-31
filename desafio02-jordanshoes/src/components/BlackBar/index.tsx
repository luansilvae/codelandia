import React from "react";

import style from "./blackBar.module.scss";

interface Props {
  title: string;
}

const BlackBar: React.FC<Props> = ({ title }) => {
  return (
    <div className={style.Container}>
      <span>{title}</span>
    </div>
  );
};

export default BlackBar;
