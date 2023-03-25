import { validationConfig, Config } from './../settings/settings';

export interface ErrorsProp {
  [key: string]: string;
}

export function validation(config: Config, validation: validationConfig) {
  const errors: ErrorsProp = {};

  Object.keys(validation).forEach((key) => {
    if (validation[key].req && !config[key]) {
      errors[key] = 'Поле обязательно для заполнения';
      return;
    }

    if (Number.isNaN(Number(config[key]))) {
      errors[key] = 'Вы ввели не число';
      return;
    }
    if (validation[key].minLenght > Number(config[key])) {
      errors[key] = 'Слишком маленькая величина';
      return;
    }
    if (validation[key].maxLenght < Number(config[key])) {
      errors[key] = 'Слишком большая величина';
      return;
    }
  });
  return errors;
}
