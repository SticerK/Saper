import React from 'react';
import styles from './header.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { AiOutlineLogin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { timerRecord } from '../redux/userSlice';

const Header: React.FC = () => {
  const [timer, setTimer] = React.useState(0);
  const settings = useSelector((state: RootState) => state.settingsSlice);
  const { arrayMines, win } = useSelector((state: RootState) => state.settingsSlice);
  const { isAuth, ...arg } = useSelector((state: RootState) => state.userSlice);
  const dispath = useDispatch();
  const timerRef = React.useRef(new Date().getTime());

  React.useEffect(() => {
    setInterval(() => setTimer((time) => time + 1), 1000);
  }, []);

  React.useEffect(() => {
    console.log(win);

    const record = ((new Date().getTime() - timerRef.current) / 1000).toFixed(0);
    win && dispath(timerRecord(Number(record)));
  }, [win]);

  return (
    <header className={styles.header}>
      <div className={styles.settings}>
        <div>Ширина: {settings.height}</div>
        <div>Длина: {settings.width}</div>
        <div>Кол-во мин: {arrayMines.length}</div>
        <div>Время: {timer}</div>
      </div>
      <div className={styles.auth}>
        {isAuth ? (
          <Link to={`profile/${arg.user._id}`} className={styles.icon}></Link>
        ) : (
          <Link to={'/auth/login'}>
            <AiOutlineLogin />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
