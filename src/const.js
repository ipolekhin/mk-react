export const TextError = {
  EMAIL: `Email адрес имеет неправильный формат`,
  LOGIN: `Никнейм начинается с буквы, далее буквы, цифры и подчеркивание`,
  SHORT: ` должен содержать не менее 4 символов`,
  LONG: ` должен содержать не более 40 символов`,
  PASSWORD_LOGIN_EMAIL: `Пароль не должен совпадать с Никнеймом или Email-ом`,
  PASSWORD_CONFIRM: `Введённые пароли не совпадают`,
};

export const PasswordStatusType = {
  DEFAULT: `default`,
  ERROR: `error`,
  OK: `ok`,
};

export const PASSWORD_STATUS_NAME = [
  PasswordStatusType.DEFAULT,
  PasswordStatusType.ERROR,
  PasswordStatusType.OK
];
