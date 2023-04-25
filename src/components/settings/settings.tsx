import React from 'react';
import styles from './settings.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Input2 from '../UI/input_2';
import Button from '../UI/button';
import { enterGame } from '../redux/settingsSlice';
import Modal from '../modal';
import { CSSTransition } from 'react-transition-group';
import { RootState } from '../store/store';
import { ErrorsProp, validation } from '../utils/validation';

export interface validationConfig {
  [key: string]: {
    req: boolean;
    minLenght: number;
    maxLenght: number;
    message: string;
  };
}

export interface Config {
  [key: string]: unknown;
}

const Settings: React.FC = () => {
  const dispatch = useDispatch();
  const nodeRef = React.useRef(null);
  const [animate, setAnimate] = React.useState(false);
  const [errors, setErrors] = React.useState<ErrorsProp>({});
  const { enter, width, height } = useSelector((state: RootState) => state.settingsSlice);

  React.useEffect(() => {
    setAnimate(true);
  }, []);
  const settingInputs = [
    { ph: 'Ширина поля', nameInput: 'width' },
    { ph: 'Высота поля', nameInput: 'height' },
  ];

  const validationConfig = {
    width: {
      req: true,
      minLenght: 4,
      maxLenght: 20,
      message: '',
    },
    height: {
      req: true,
      minLenght: 4,
      maxLenght: 20,
      message: '',
    },
  };

  const isValid = (errors: ErrorsProp) => Object.keys(errors).length === 0;

  const enterSettings = () => {
    const config = { width, height };
    const error = validation(config, validationConfig);
    setErrors(error);
    if (isValid(error)) dispatch(enterGame());
  };

  return (
    <CSSTransition nodeRef={nodeRef} in={animate} timeout={2000} classNames={'settings'}>
      <div ref={nodeRef} style={{ height: '100%' }}>
        <Modal>
          <div className={styles.title}>Введите параметры поля</div>
          {settingInputs.map((item) => (
            <Input2 ph={item.ph} name={item.nameInput} error={errors[item.nameInput]} />
          ))}
          <Button click={enterSettings}>Принять</Button>
        </Modal>
      </div>
    </CSSTransition>
  );
};

export default Settings;
