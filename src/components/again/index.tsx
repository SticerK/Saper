import React from 'react';
import styles from './again.module.scss';
import Modal from '../modal';
import Button from '../UI/button';
import { useDispatch, useSelector } from 'react-redux';
import { enterGame, newGame } from '../redux/settingsSlice';
import { RootState } from '../store/store';
import Game from '../game';
import { endGame } from '../redux/userSlice';

const Again: React.FC = () => {
  const dispath = useDispatch();
  const { losing } = useSelector((state: RootState) => state.settingsSlice);

  React.useEffect(() => {
    dispath(endGame(false));
  });

  const onAgain = () => {
    dispath(enterGame());
    return <Game />;
  };

  React.useEffect(() => {
    document.querySelector('body')?.addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        dispath(enterGame());
        return <Game />;
      }
    });
  }, []);

  return (
    <Modal hide={losing}>
      <div className={styles.wrapper}>
        <Button click={() => dispath(newGame())}>Начать заново</Button>
        <Button click={() => onAgain()}>
          <div>Перезагрузить</div>
          <div className={styles.help}>Enter</div>
        </Button>
      </div>
    </Modal>
  );
};

export default Again;
