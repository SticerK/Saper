import React from 'react';
import { useDispatch } from 'react-redux';
import { addParams } from '../redux/settingsSlice';
import styles from './UI.module.scss';

type InputProps = {
  ph: string;
  name: string;
  error?: string;
};

const Input2: React.FC<InputProps> = ({ ph, name, error }) => {
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();
  const nodeRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    dispatch(addParams({ name, value }));
  }, [value]);

  const handleClickPH = () => {
    nodeRef.current?.focus();
  };

  return (
    <div className={styles.wrapper}>
      <input
        ref={nodeRef}
        className={styles.input}
        type='text'
        name={name}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      {!value && (
        <div className={styles.placeholder} onClick={handleClickPH}>
          {ph}
        </div>
      )}

      <p className={styles.error}>{error}</p>
    </div>
  );
};

export default Input2;
