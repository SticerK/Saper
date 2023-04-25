import React from 'react';
import styles from './win.module.scss';
import Modal from '../modal';
import Button from '../UI/button';
import { useDispatch, useSelector } from 'react-redux';
import { newGame } from '../redux/settingsSlice';
import { endGame } from '../redux/userSlice';
import { RootState } from '../store/store';

const Win: React.FC = () => {
  const dispath = useDispatch();
  const { time } = useSelector((state: RootState) => state.userSlice.game);
  React.useEffect(() => {
    dispath(endGame(true));
  }, []);
  return (
    <Modal>
      <h1 className={styles.text}>Поздравляю!</h1>
      <div className={styles.text}>Ты выиграл</div>
      <div>{time}</div>
      <Button click={() => dispath(newGame())}>Начать заново</Button>
    </Modal>
  );
};

export default Win;
