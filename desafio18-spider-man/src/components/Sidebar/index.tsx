import React from 'react'
import Avatar from '../Avatar'
import { FacebookIcon, InstagramIcon, SearchIcon, TwitterIcon } from '../Icons'

import styles from './sidebar.module.scss'

export const SideBar: React.FC = () => {
  return (
    <aside className={styles.sideBar}>
      <div className={styles.sidebarContent}>
        <Avatar />

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
