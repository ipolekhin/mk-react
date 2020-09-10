import React from "react";
import {
  functionType,
  isBoolType,
  isStringType,
} from "../../types/types.js";

const FormStepOne = (props) => {
  const {
    onEmailFormChange,
    onBlurEmailField,
    emailErrorShow,
    emailErrorText,

    onLoginFormChange,
    onBlurLoginField,
    loginErrorShow,
    loginErrorText,

    onPassFormChange,
    onBlurPassField,
    passwordErrorCount,
    passwordErrorNumber,
    passwordErrorSymbol,
    passwordErrorShow,
    passwordErrorText,

    onPassConfirmFormChange,
    onBlurPassConfirmField,
    passwordConfirmErrorShow,
    passwordConfirmErrorText,

    onFederalLawChange,
  } = props;

  const defaultState = (passwordError) => {
    return (
      (passwordError === null && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13ZM7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z" fill="#777777"/>
        </svg>
      )) || (passwordError && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="none" >
          <path fillRule="evenodd" clipRule="evenodd" d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" fill="#007B1B"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M12.5293 5.13842L8.0293 11.6384C7.86051 11.8822 7.59224 12.0385 7.29691 12.0652C7.00159 12.0918 6.70967 11.986 6.5 11.7763L3 8.27632L4.41421 6.8621L7.06695 9.51484L10.8849 4L12.5293 5.13842Z" fill="#007B1B"/>
        </svg>
      ) || (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="none" >
          <path fillRule="evenodd" clipRule="evenodd" d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" fill="#9F2B11"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M8.00001 6.5858L10.7929 3.79291L12.2071 5.20712L9.41423 8.00001L12.2071 10.7929L10.7929 12.2071L8.00001 9.41423L5.20712 12.2071L3.79291 10.7929L6.5858 8.00001L3.79291 5.20712L5.20712 3.79291L8.00001 6.5858Z" fill="#9F2B11"/>
        </svg>
      ))
    );
  };

  const defaultClassName = (passwordError) => {
    return ((passwordError === null && (` `)) || (passwordError && (`form__pass-rule--ok`) || (`form__pass-rule--error`)));
  };

  return (
    <React.Fragment>
      <li className="form__item">
        <span className="form__sub-text">E-mail</span>
        <input
          className="form__field"
          type="email" name="email"
          placeholder="E-mail"
          minLength="4"
          maxLength="40"
          required=""
          onChange={onEmailFormChange}
          onBlur={onBlurEmailField}
        />
        {emailErrorShow && (
          <span className="form__field-error">{emailErrorText}</span>
        )}
      </li>

      <li className="form__item">
        <span className="form__sub-text">Никнейм</span>
        <input
          className="form__field"
          type="text"
          name="login"
          placeholder="Логин"
          minLength="4"
          maxLength="40"
          required=""
          onChange={onLoginFormChange}
          onBlur={onBlurLoginField}
        />
        {loginErrorShow && (
          <span className="form__field-error">{loginErrorText}</span>
        )}
      </li>

      <li className="form__item">
        <span className="form__sub-text">Пароль</span>
        <input
          className="form__field"
          type="password"
          name="password"
          placeholder="Пароль"
          required=""
          minLength="6"
          maxLength="32"
          onChange={onPassFormChange}
          onBlur={onBlurPassField}
        />

        <dl className="form__pass-rules">
          <dt>Пароль должен содержать:</dt>
          <dd className={`form__pass-rule form__pass-rule--count ${defaultClassName(passwordErrorCount)}`}>
            {defaultState(passwordErrorCount)}
            от 6 до 32 символов
          </dd>
          <dd className={`form__pass-rule form__pass-rule--number ${defaultClassName(passwordErrorNumber)}`}>
            {defaultState(passwordErrorNumber)}
            цифру
          </dd>
          <dd className={`form__pass-rule form__pass-rule--case ${defaultClassName(passwordErrorSymbol)}`}>
            {defaultState(passwordErrorSymbol)}
            заглавную и строчную буквы
          </dd>
          {passwordErrorShow && (
            <dd className="form__pass-rule form__pass-rule--different">
              {passwordErrorText}
            </dd>
          )}
        </dl>
      </li>

      <li className="form__item form__item--pass-confirm">
        <span className="form__sub-text">Пароль еще раз</span>
        <input
          className="form__field"
          type="password"
          name="passwordConfirm"
          placeholder="Пароль еще раз"
          required=""
          onChange={onPassConfirmFormChange}
          onBlur={onBlurPassConfirmField}
        />
        {passwordConfirmErrorShow && (
          <span className="form__field-error">{passwordConfirmErrorText}</span>
        )}
      </li>

      <li className="form__item">
        <label className="form__registration-federal-law" htmlFor="form__registration-federal-law">
          <input
            id="form__registration-federal-law"
            type="checkbox"
            name="personal"
            required=""
            onChange={onFederalLawChange}
          />
          <span></span>
          <p>Я принимаю условия <a href="#">Пользовательского соглашения</a></p>
        </label>
      </li>
    </React.Fragment>
  );
};

FormStepOne.propTypes = {
  onEmailFormChange: functionType,
  onBlurEmailField: functionType,
  emailErrorShow: isBoolType,
  emailErrorText: isStringType,

  onLoginFormChange: functionType,
  onBlurLoginField: functionType,
  loginErrorShow: isBoolType,
  loginErrorText: isStringType,

  onPassFormChange: functionType,
  onBlurPassField: functionType,
  passwordErrorCount: isBoolType,
  passwordErrorNumber: isBoolType,
  passwordErrorSymbol: isBoolType,
  passwordErrorShow: isBoolType,
  passwordErrorText: isStringType,

  onPassConfirmFormChange: functionType,
  onBlurPassConfirmField: functionType,
  passwordConfirmErrorShow: isBoolType,
  passwordConfirmErrorText: isStringType,

  onFederalLawChange: functionType,
};

export default FormStepOne;
