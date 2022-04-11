import React from 'react'
import { FacebookIcon, InstagramIcon, SearchIcon, TwitterIcon } from '../Icons'

import styles from './sidebar.module.scss'

export const SideBar: React.FC = () => {
  return (
    <aside className={styles.sideBar}>
      <div className={styles.sidebarContent}>
        <div className={styles.userAvatar}>
          <img
            src="https://avatars.githubusercontent.com/u/86011816?v=4"
            alt="User image"
          />
          <div className={styles.status}></div>
        </div>

        <ul className={styles.socials}>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <FacebookIcon />
          </li>
        </ul>

        <SearchIcon />
      </div>
    </aside>
  )
}
