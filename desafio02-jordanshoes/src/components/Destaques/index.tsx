import React from 'react';

import Shoes from '../Shoes';
import style from './destaques.module.scss';
import shoes from '../../shoesImages.json'


const Destaques: React.FC = () => {
  return (
    <div className={style.Container}>
      <div className={style.Header}>
        <h2>Destaques</h2>
        <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </p>
      </div>

      <div className={style.Grid}>
        {
          shoes.map((shoe, index) => (
            <Shoes key={index} url={shoe.url} />
          ))
        }
      </div>
    </div>
  );
}

export default Destaques;