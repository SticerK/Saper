import React from 'react';
import Container from '../container';
import styles from './profile.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { AiOutlinePlus } from 'react-icons/ai';
import Button from '../UI/button';
import { useNavigate, useParams } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Profile: React.FC = () => {
  const { firstName, lastName, email, _id } = useSelector(
    (state: RootState) => state.userSlice.user
  );
  const { games, wins, time } = useSelector((state: RootState) => state.userSlice.game);
  const nodeRef = React.useRef<HTMLInputElement>(null);

  const addAvatar = () => {
    nodeRef.current?.click();
  };

  const isNaN = () => {
    debugger;
    return Number.isNaN(wins / games) ? '0' : ((wins / games) * 100).toFixed(0);
  };

  const navigate = useNavigate();
  const params = useParams();

  React.useEffect(() => {
    if (_id !== Number(params.id)) navigate('/');
  }, []);

  return (
    <Container width='50%'>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.title}>{firstName + ' ' + lastName}</div>
          <div className={styles.email}>{email}</div>
          <div className={styles.text}>Всего игр: {games}</div>
          <div className={styles.text}>Из них побед: {wins}</div>
          <div className={styles.text}>Процент побед: {isNaN()}%</div>
          <div className={styles.progressItems}>
            <div className={styles.progressWrapper}>
              <CircularProgressbar
                className={styles.progress}
                value={wins / games}
                maxValue={1}
                text={`${isNaN()} %`}
              />
              <div className={styles.subtitle}>Процент побед</div>
            </div>
            <div className={styles.progressWrapper}>
              <CircularProgressbar
                className={styles.progress}
                value={time}
                maxValue={time}
                text={`${time} сек`}
              />
              <div className={styles.subtitle}>Рекорд</div>
            </div>
          </div>
        </div>
        <div className={styles.avatar} onClick={addAvatar}>
          <AiOutlinePlus className={styles.plus} />
          <input
            type='file'
            className={styles.file}
            ref={nodeRef}
            accept='.png, .jpeg, .jpg, .gif'></input>
        </div>
      </div>
      <Button click={() => navigate('/')}>К игре</Button>
    </Container>
  );
};

export default Profile;
