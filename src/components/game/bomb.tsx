import React from 'react';
import styles from './game.module.scss';
import { AiTwotoneFire } from 'react-icons/ai';

const Bomb = () => {
  return (
    <div className={styles.bomb}>
      <AiTwotoneFire />
    </div>
  );
};

export default Bomb;
