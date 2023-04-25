import React from 'react';
import styles from './auth.module.scss';
import Input from '../UI/input';
import Container from '../container';
import Button from '../UI/button';
import { Link } from 'react-router-dom';

export interface Values {
  [key: string]: string;
}

const Login: React.FC = () => {
  const [value, setValue] = React.useState<Values>({ email: '', password: '' });

  const inputs = [
    {
      id: 1,
      type: 'email',
      name: 'email',
      placeholder: 'Введите email',
      errorMessage: 'Неправильно указан email',
    },
    {
      id: 2,
      type: 'password',
      name: 'password',
      placeholder: 'Введите пароль',
      errorMessage: 'Неправильно указан пароль',
    },
  ];

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <Container width='20%' height='auto' mt='10%'>
      <h1 className={styles.title}>Авторизация</h1>
      <form method='post' className={styles.form}>
        {inputs.map((input) => (
          <Input {...input} value={value[input.name]} onHandle={changeInput} key={input.id} />
        ))}
        <Button click={() => null}>Войти</Button>
      </form>
      <Link to={'/auth/register'} className={styles.reg}>
        Зарегистрироваться
      </Link>
    </Container>
  );
};

export default Login;
