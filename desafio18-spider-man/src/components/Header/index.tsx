import React, { useCallback, useState } from 'react'
import Avatar from '../Avatar'
import { MarvelLogo, SpiderManLogo } from '../Icons'

import styles from './header.module.scss'

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toogleMenu = useCallback(() => {
    setMenuOpen(prev => !prev)
  }, [])

  return (
    <header
      className={`${styles.headerContainer} ${menuOpen ? styles.menuOpen : ''}`}
    >
      <div className={styles.headerWrapper}>
        <div className={styles.userAvatar}>
          <Avatar />
        </div>

        <a href="#" title="Marvel Comics" tabIndex={0}>
          <MarvelLogo aria-label="Marvel Comics Logo" />
        </a>

        <a
          className={styles.menuButton}
          href="#"
          title="Spider-Man"
          tabIndex={0}
          onClick={toogleMenu}
        >
          <SpiderManLogo aria-label="Sipder-Man Logo" />
        </a>

        <ul className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          <li>HOME</li>
          <li>SINOPSE</li>
          <li>ELENCO</li>
        </ul>
      </div>
    </header>
  )
}
