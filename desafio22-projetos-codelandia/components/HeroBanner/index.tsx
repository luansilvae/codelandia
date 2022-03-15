import React from "react";

import styles from "./HeroBanner.module.scss";

export const HeroBanner: React.FC = () => {
  return (
    <section className={styles.Container}>
      <h1>
        <span>comunidade dev</span> Projetos da comunidade Codelândia
      </h1>

      <p>
        Desafios de front-end com projetos práticos da comunidade Codelândia no
        Discord, idealizada pelo{" "}
        <a href="https://www.iuricode.com/" target="_blank" rel="noreferrer">
          Iuri Silva
        </a>
        .
      </p>
    </section>
  );
};
