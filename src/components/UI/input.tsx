import React from 'react';
import { useDispatch } from 'react-redux';
import { addParams } from '../redux/settingsSlice';
import styles from './UI.module.scss';

type InputProps = {
  ph: string;
  name: string;
};

const Input: React.FC<InputProps> = ({ ph, name }) => {
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(addParams({ name, value }));
  }, [value]);

  return (
    <input
      className={styles.input}
      type='text'
      placeholder={ph}
      name={name}
      value={value}
      onChange={({ target }) => setValue(target.value)}
    />
  );
};

export default Input;
