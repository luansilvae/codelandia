import React from "react";

import styles from "./HeroBanner.module.scss";

export const HeroBanner: React.FC = () => {
  return (
    <section className={styles.Container}>
      <h1>
        <span>comunidade dev</span> Projetos da comunidade Codelândia
      </h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis
        ligula, accumsan nec cursus in, eleifend sit amet dui.
      </p>
    </section>
  );
};
