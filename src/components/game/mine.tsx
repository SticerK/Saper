import React from 'react';
import styles from './game.module.scss';
import { AiOutlineWarning } from 'react-icons/ai';

type mineProps = {
  open: boolean;
};

const Mine: React.FC<mineProps> = ({ open }) => {
  return (
    <div className={open ? styles.mine : [styles.mine, styles.hidden].join(' ')}>
      <AiOutlineWarning />
    </div>
  );
};

export default Mine;
