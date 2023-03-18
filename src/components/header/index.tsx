import React from 'react';
import styles from './header.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { AiOutlineLogin } from 'react-icons/ai';
import { allBombs } from '../utils/allMines';

const Header: React.FC = () => {
  const settings = useSelector((state: RootState) => state.settingsSlice);
  const { arrayMines } = useSelector((state: RootState) => state.settingsSlice);

  return (
    <header className={styles.header}>
      <div className={styles.settings}>
        <div>Ширина: {settings.height}</div>
        <div>Длина: {settings.width}</div>
        <div>Кол-во мин: {arrayMines.length}</div>
      </div>
      <div className={styles.auth}>
        <AiOutlineLogin />
      </div>
    </header>
  );
};

export default Header;
