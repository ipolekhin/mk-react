import React from "react";
import {functionType, isBoolType, isNumberType} from "../../types/types.js";

const withForm = (Component) => {
  class WithForm extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        textButton: `Далее`,
        object: {},
      };
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event) {
      event.preventDefault();
      const {closePopup, setStep, step} = this.props;
      const {object} = this.state;

      const promise = new Promise((resolve) => {
        const formData = new FormData(event.target);
        formData.forEach((value, key) => {
          object[key] = value;
        });
        resolve();
      });

      promise.then(() => {
        if (step === -1) {
          setStep(0);
        } else if (step === 0) {
          setStep(1);
          closePopup();
          console.log(JSON.stringify(object));
        }
      });
    }

    render() {
      const {step} = this.props;
      if (step === 0) {
        this.setState(() => ({
          textButton: `Зарегистрироваться`,
        }));
      }

      return (
        <Component
          {...this.props}
          {...this.state}
          onFormSubmit={this.handleFormSubmit}
        />
      );
    }
  }

  WithForm.propTypes = {
    closePopup: functionType,
    isSelected: isBoolType,
    recordFormData: functionType,
    setStep: functionType,
    step: isNumberType,
  };

  return WithForm;
};

export default withForm;
