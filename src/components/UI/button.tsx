import React, { PropsWithChildren } from 'react';
import styles from './UI.module.scss';
import Game from '../game';

type buttonProps = {
  click: () => void;
};

const Button: React.FC<PropsWithChildren<buttonProps>> = ({ children, click }) => {
  return (
    <button type='button' className={styles.btn} onClick={click}>
      {children}
    </button>
  );
};

export default Button;
