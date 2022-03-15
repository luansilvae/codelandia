import Image from "next/image";
import React from "react";
import Logo from "../../public/logo.svg";

import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <Image src={Logo} alt="Codelândia" objectFit="fill" width={251} />

      <div className={styles.Menu}>
        <a
          href="https://github.com/luansilvae"
          target="_blank"
          className={styles.GithubButton}
          rel="noreferrer"
        >
          MEU GITHUB
        </a>
        <a href="#" className={styles.CommunityButton}>
          ENTRAR NA COMUNIDADE
        </a>
      </div>
    </header>
  );
};
