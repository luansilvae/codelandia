import React from 'react'

import styles from './avatar.module.scss'

const Avatar: React.FC = () => {
  return (
    <div className={styles.userAvatar}>
      <img
        src="https://avatars.githubusercontent.com/u/86011816?v=4"
        alt="User image"
      />
      <div className={styles.status}></div>
    </div>
  )
}

export default Avatar
