import React from 'react';
import styles from './settings.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../UI/input';
import Button from '../UI/button';
import { enterGame } from '../redux/settingsSlice';
import Modal from '../modal';
import { CSSTransition } from 'react-transition-group';
import { RootState } from '../store/store';

const Settings: React.FC = () => {
  const dispatch = useDispatch();
  const nodeRef = React.useRef(null);
  const [animate, setAnimate] = React.useState(false);
  const { enter } = useSelector((state: RootState) => state.settingsSlice);

  React.useEffect(() => {
    setAnimate(true);
  }, []);
  const settingInputs = [
    { ph: 'Ширина поля', nameInput: 'width' },
    { ph: 'Высота поля', nameInput: 'height' },
  ];
  return (
    <CSSTransition nodeRef={nodeRef} in={animate} timeout={2000} classNames={'settings'}>
      <div ref={nodeRef} className={enter ? 'hide' : ''} style={{ height: '100%' }}>
        <Modal hidden={false}>
          <div className={styles.title}>Введите параметры поля</div>
          {settingInputs.map((item) => (
            <Input ph={item.ph} name={item.nameInput} />
          ))}
          <Button click={() => dispatch(enterGame())}>Принять</Button>
        </Modal>
      </div>
    </CSSTransition>
  );
};

export default Settings;
