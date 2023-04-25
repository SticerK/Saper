import React from 'react';
import Container from '../container';
import styles from './auth.module.scss';
import Input from '../UI/input';
import Button from '../UI/button';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { log } from 'console';
import { useDispatch } from 'react-redux';
import { User, getUser } from '../redux/userSlice';

const Register: React.FC = () => {
  const [value, setValue] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  // const [errors, setErrors] = React.useState([false, false, false, false, false]);

  // const validForm = (idx: number, value: boolean) => {
  //   console.log(idx, value);

  //   const q = errors.splice(idx, 0, value);
  //   console.log(q);
  // };

  const dispath = useDispatch();

  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      type: 'text',
      name: 'firstName',
      placeholder: 'Введите имя',
      required: { req: true, message: 'Это поле обязательное' },
      config: {
        minLength: {
          value: 2,
          message: 'Имя должно содержать минимум 2 символа',
        },
      },
    },
    {
      id: 2,
      type: 'text',
      name: 'lastName',
      placeholder: 'Введите фамилию',
      required: { req: true, message: 'Это поле обязательное' },
      config: {
        minLength: {
          value: 3,
          message: 'Фамилия должна содержать минимум 3 символа',
        },
      },
    },
    {
      id: 3,
      type: 'email',
      name: 'email',
      placeholder: 'Введите email',
      required: { req: true, message: 'Это поле обязательное' },
      config: {
        email: {
          value:
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: 'Некорректно указан email',
        },
      },
    },
    {
      id: 4,
      type: 'password',
      name: 'password',
      placeholder: 'Введите пароль',
      required: { req: true, message: 'Это поле обязательное' },
      config: {
        minLength: {
          value: 5,
          message: 'Пароль должнен содержать минимум 5 символов',
        },
      },
    },
    {
      id: 5,
      type: 'password',
      name: 'passwordConfirm',
      placeholder: 'Введите пароль',
      required: { req: true, message: 'Это поле обязательное' },
      config: {
        minLength: {
          value: 5,
          message: 'Пароль должнен содержать минимум 5 символов',
        },
        repeat: {
          message: 'Ваш пароль должен совпадать',
        },
      },
    },
  ];

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const redirectProfile = () => {
    const _id = new Date().getTime();
    navigate(`/profile/${_id}`);
    const { passwordConfirm, ...arg } = value;
    dispath(getUser({ ...arg, _id } as User));
  };

  return (
    <Container width='20%' height='auto'>
      <h1 className={styles.title}>Регистрация</h1>
      <form method='post' className={styles.form}>
        {inputs.map((input, index) => (
          <Input
            {...input}
            //@ts-ignore
            value={value[input.name]}
            onHandle={changeInput}
            key={input.id}
            idx={index}
            // validForm={validForm}
          />
        ))}
        <Button click={redirectProfile}>Зарегистрироваться</Button>
      </form>
    </Container>
  );
};

export default Register;
