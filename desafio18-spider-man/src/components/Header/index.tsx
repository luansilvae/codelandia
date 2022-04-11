import React from 'react'
import { MarvelLogo, SpiderManLogo } from '../Icons'

import styles from './header.module.scss'

export const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <a href="#" title="Marvel Comics" tabIndex={0}>
          <MarvelLogo aria-label="Marvel Comics Logo" />
        </a>

        <a href="#" title="Spider-Man" tabIndex={0}>
          <SpiderManLogo aria-label="Sipder-Man Logo" />
        </a>

        <ul className={styles.menu}>
          <li>HOME</li>
          <li>SINOPSE</li>
          <li>ELENCO</li>
        </ul>
      </div>
    </header>
  )
}
