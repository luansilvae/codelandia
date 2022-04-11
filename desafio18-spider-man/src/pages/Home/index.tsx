import React from 'react'
import { Header } from '../../components/Header'
import { PlayIcon } from '../../components/Icons'
import { SideBar } from '../../components/Sidebar'

import styles from './Home.module.scss'

export const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <SideBar />
        <Header />

        <div className={styles.gameBanner}>
          <img src="/images/game-logo.svg" alt="Spider-Man game logo" />

          <button type="button">
            <span>
              Assista ao trailer <PlayIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
