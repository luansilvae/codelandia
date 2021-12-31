import React from "react";
import Card from "../Card";

import style from "./posts.module.scss";

const Posts: React.FC = () => {
  return (
    <div className={style.Container}>
      <div className={style.Grid}>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
