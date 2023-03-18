import React from 'react';
import styles from './again.module.scss';
import Modal from '../modal';
import Button from '../UI/button';
import { useDispatch, useSelector } from 'react-redux';
import { enterGame, newGame } from '../redux/settingsSlice';
import { RootState } from '../store/store';
import Game from '../game';

const Again: React.FC = () => {
  const dispath = useDispatch();
  const { losing } = useSelector((state: RootState) => state.settingsSlice);

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
    <div className={losing ? '' : 'hide'} tabIndex={0}>
      <Modal hidden={true}>
        <div className={styles.wrapper}>
          <Button click={() => dispath(newGame())}>Начать заново</Button>
          <Button click={() => onAgain()}>
            <div>Перезагрузить</div>
            <div className={styles.help}>Enter</div>
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Again;
