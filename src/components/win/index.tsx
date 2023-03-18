import React from 'react';
import styles from './win.module.scss';
import Modal from '../modal';
import Button from '../UI/button';
import { useDispatch } from 'react-redux';
import { newGame } from '../redux/settingsSlice';

const Win: React.FC = () => {
  const dispath = useDispatch();
  return (
    <Modal>
      <h1 className={styles.text}>Поздравляю!</h1>
      <div className={styles.text}>Ты выиграл</div>
      <Button click={() => dispath(newGame())}>Начать заново</Button>
    </Modal>
  );
};

export default Win;
