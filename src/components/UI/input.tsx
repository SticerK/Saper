import React, { Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { addParams } from '../redux/settingsSlice';
import styles from './UI.module.scss';
import { Values } from '../auth/login';
import { ValidateV2 } from '../utils/validateV2';
import { log } from 'console';

type InputProps = {
  placeholder: string;
  name: string;
  value: string;
  key: number;
  type: string;
  onHandle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: boolean;
  validForm?: (x: number, y: boolean) => void;
  idx?: number;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  name,
  value,
  onHandle,
  key,
  type,
  idx,
  validForm,
  ...arg
}) => {
  const nodeRef = React.useRef<HTMLInputElement>(null);
  const [error, setError] = React.useState([false, '']);

  const handleClickPH = () => {
    nodeRef.current?.focus();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onHandle(e);
  };

  const isValid = () => {
    setError(ValidateV2(arg, nodeRef.current?.value));
    if (validForm !== undefined && idx !== undefined) {
      //какая-то залупа

      validForm(idx, Boolean(nodeRef.current?.dataset.valid));
    }
  };

  return (
    <div className={styles.wrapper} key={key}>
      <input
        data-valid={!error[0]}
        ref={nodeRef}
        className={styles.input}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={isValid}
      />
      {!value && (
        <div className={styles.placeholder} onClick={handleClickPH}>
          {placeholder}
        </div>
      )}

      {error[0] && <p className={styles.error}>{error[1]}</p>}
    </div>
  );
};

export default Input;
