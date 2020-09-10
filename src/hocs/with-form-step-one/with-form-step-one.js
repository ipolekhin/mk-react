import React from "react";
import {TextError} from "../../const.js";
import {functionType} from "../../types/types.js";

const withFormStepOne = (Component) => {
  class WithForm extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        emailErrorShow: false,
        emailErrorText: ``,
        loginErrorShow: false,
        loginErrorText: ``,
        passwordErrorShow: false,
        passwordErrorText: ``,
        passwordErrorCount: null,
        passwordErrorNumber: null,
        passwordErrorSymbol: null,
        passwordConfirmErrorShow: false,
        passwordConfirmErrorText: ``,
        emailOk: false,
        loginOk: false,
        passwordOk: false,
        passwordConfirmOk: false,
        personalChecked: false,
      };
      this._emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      this._loginReg = /^[a-zA-Z]{1,}([a-zA-Z0-9_]*)$/;
      this._passwordNumberReg = /^(?=.*[0-9]).*$/;
      this._passwordSymbolReg = /^(?=.*[A-Z])(?=.*[a-z]).*$/;
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleBlurEmailField = this.handleBlurEmailField.bind(this);
      this.handleLoginFormChange = this.handleLoginFormChange.bind(this);
      this.handleBlurLoginField = this.handleBlurLoginField.bind(this);
      this.handlePassFormChange = this.handlePassFormChange.bind(this);
      this.handleBlurPassField = this.handleBlurPassField.bind(this);
      this.handlePassConfirmFormChange = this.handlePassConfirmFormChange.bind(this);
      this.handleBlurPassConfirmField = this.handleBlurPassConfirmField.bind(this);
      this.handleFederalLawChange = this.handleFederalLawChange.bind(this);
    }

    _validateForm() {
      const {setButtonState} = this.props;

      const {
        emailOk,
        loginOk,
        passwordOk,
        passwordConfirmOk,
        personalChecked,
      } = this.state;

      const isActive = (
        !emailOk
        || !loginOk
        || !passwordOk
        || !passwordConfirmOk
        || !personalChecked
      );

      setButtonState(isActive);
    }

    _setStateValue(event, name, value, isBoolean, text) {
      this.setState(() => ({
        [name]: value,
        [name + `ErrorShow`]: isBoolean,
        [name + `ErrorText`]: text,
        [name + `Ok`]: !isBoolean,
      }));
      event.target.setCustomValidity(text);
    }

    // Email
    handleEmailChange(event) {
      const {name, value} = event.target;
      if (this._emailReg.test(value)) {
        this._setStateValue(event, name, value, false, ``);
      }
    }

    handleBlurEmailField(event) {
      const {name, value} = event.target;
      if (!this._emailReg.test(value)) {
        this._setStateValue(event, name, value, true, TextError.EMAIL);
      } else if (event.target.validity.tooShort) {
        this._setStateValue(event, name, value, true, `${name} ${TextError.SHORT}`);
      } else if (event.target.validity.tooLong) {
        this._setStateValue(event, name, value, true, `${name} ${TextError.LONG}`);
      } else {
        this._setStateValue(event, name, value, false, ``);
      }
    }

    // Login
    handleLoginFormChange(event) {
      const {name, value} = event.target;
      if (value.length >= 4) {
        this._setStateValue(event, name, value, false, ``);
      }
    }

    handleBlurLoginField(event) {
      const {name, value} = event.target;
      if (!this._loginReg.test(value)) {
        this._setStateValue(event, name, value, true, `${TextError.LOGIN}`);
      } else if (event.target.validity.tooShort) {
        this._setStateValue(event, name, value, true, `${name} ${TextError.SHORT}`);
      } else if (event.target.validity.tooLong) {
        this._setStateValue(event, name, value, true, `${name} ${TextError.LONG}`);
      } else {
        this._setStateValue(event, name, value, false, ``);
      }
    }

    // Pass
    handlePassFormChange(event) {
      const {name, value, minLength, maxLength} = event.target;
      if (this.state.passwordErrorCount) {
        if (value.length < minLength || value.length > maxLength) {
          this.setState(() => ({
            [name + `ErrorCount`]: false,
          }));
        }
      } else if (value.length >= minLength & value.length <= maxLength) {
        this.setState(() => ({
          [name + `ErrorCount`]: true,
          [name + `Ok`]: true,
        }));
      }

      if (this.state.passwordErrorNumber) {
        if (!this._passwordNumberReg.test(value)) {
          this.setState(() => ({
            [name + `ErrorNumber`]: false,
          }));
        }
      } else if (this._passwordNumberReg.test(value)) {
        this.setState(() => ({
          [name + `ErrorNumber`]: true,
        }));
      }

      if (this.state.passwordErrorSymbol) {
        if (!this._passwordSymbolReg.test(value)) {
          this.setState(() => ({
            [name + `ErrorSymbol`]: false,
          }));
        }
      } else if (this._passwordSymbolReg.test(value)) {
        this.setState(() => ({
          [name + `ErrorSymbol`]: true,
        }));
      }

      if (this._passwordNumberReg.test(value)
        && this._passwordSymbolReg.test(value)
        && value.length >= minLength) {
        this.setState(() => ({
          [name + `Ok`]: true,
        }));
      } else {
        this.setState(() => ({
          [name + `Ok`]: false,
        }));
      }
    }

    handleBlurPassField(event) {
      const {name, value} = event.target;
      if (value === this.state.email) {
        this._setStateValue(event, name, value, true, `${TextError.PASSWORD_LOGIN_EMAIL}`);
      } else {
        this._setStateValue(event, name, value, false, ``);
      }
    }

    // pass confirm
    handlePassConfirmFormChange(event) {
      const {name, value} = event.target;
      if (value === this.state.password) {
        this._setStateValue(event, name, value, false, ``);
      }
    }

    handleBlurPassConfirmField(event) {
      const {name, value} = event.target;
      if (value !== this.state.password) {
        this._setStateValue(event, name, value, true, `${TextError.PASSWORD_CONFIRM}`);
      } else {
        this._setStateValue(event, name, value, false, ``);
      }
    }

    // Law
    handleFederalLawChange(event) {
      const {name, checked} = event.target;
      this.setState(() => ({
        [name + `Checked`]: checked ? true : false,
      }));
    }

    render() {
      this._validateForm();

      return (
        <Component
          {...this.props}
          {...this.state}
          onEmailFormChange={this.handleEmailChange}
          onBlurEmailField={this.handleBlurEmailField}
          onLoginFormChange={this.handleLoginFormChange}
          onBlurLoginField={this.handleBlurLoginField}
          onPassFormChange={this.handlePassFormChange}
          onBlurPassField={this.handleBlurPassField}
          onPassConfirmFormChange={this.handlePassConfirmFormChange}
          onBlurPassConfirmField={this.handleBlurPassConfirmField}
          onFederalLawChange={this.handleFederalLawChange}
        />
      );
    }
  }

  WithForm.propTypes = {
    setButtonState: functionType,
  };

  return WithForm;
};

export default withFormStepOne;
