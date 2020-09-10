import React from "react";
import FormStepOneComponent from "../form-step-one/form-step-one.jsx";
import FormStepTwoComponent from "../form-step-two/form-step-two.jsx";
import withFormStepOne from "../../hocs/with-form-step-one/with-form-step-one.js";
import withFormStepTwo from "../../hocs/with-form-step-two/with-form-step-two.js";
import {
  functionType,
  isBoolType,
  isNumberType,
  isStringType,
} from "../../types/types.js";

const WithFormStepOneWrapped = withFormStepOne(FormStepOneComponent);
const WithFormStepTwoWrapped = withFormStepTwo(FormStepTwoComponent);

const Form = (props) => {
  const {
    formButtonDisabled,
    setButtonState,
    step,
    onFormSubmit,
    textButton,
  } = props;

  return (
    <React.Fragment>
      <form
        className="modal__form form"
        action="#"
        method="post"
        onSubmit={onFormSubmit}
      >
        <ul className="form__list">
          {step === -1 && (
            <WithFormStepOneWrapped
              setButtonState={setButtonState}
            />
          )
          || step === 0 && (
            <WithFormStepTwoWrapped
              setButtonState={setButtonState}
            />
          )
          || step === 1 && (<div>Спасибо за регистрацию!</div>)
          }
        </ul>

        <input
          className="button"
          type="submit"
          value={textButton}
          disabled={formButtonDisabled}
        />
      </form>
    </React.Fragment>
  );
};

Form.propTypes = {
  formButtonDisabled: isBoolType,
  onFormSubmit: functionType,
  setButtonState: functionType,
  step: isNumberType,
  textButton: isStringType,
};

export default Form;
