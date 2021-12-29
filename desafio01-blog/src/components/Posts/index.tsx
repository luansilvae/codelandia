import React from 'react';
import { BiHeart } from 'react-icons/bi'

import style from './posts.module.scss';

interface Props {
  title: string
  description: string
  date: string
}

const Posts: React.FC<Props> = ({
  title,
  description,
  date
}) => {
  return (
    <div className={style.Card}>
      <div className={style.Header}>
        <span>{date}</span>
        <BiHeart size={25}/>
      </div>

      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Posts;