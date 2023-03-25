import React from 'react';
import { useDispatch } from 'react-redux';
import { addParams } from '../redux/settingsSlice';
import styles from './UI.module.scss';

type InputProps = {
  ph: string;
  name: string;
  error: string;
};

const Input: React.FC<InputProps> = ({ ph, name, error }) => {
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(addParams({ name, value }));
  }, [value]);

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type='text'
        placeholder={ph}
        name={name}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <p className={styles.error}>{error}</p>
    </div>
  );
};

export default Input;
