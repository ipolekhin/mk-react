import React from "react";
import FormComponent from "../form/form.jsx";
import withForm from "../../hocs/with-form/with-form.js";
import {
  functionType,
  isBoolType,
  isNumberType,
} from "../../types/types.js";

const WithFormWrapped = withForm(FormComponent);

const PopupModal = (props) => {
  const {
    closePopup,
    formButtonDisabled,
    setButtonState,
    setStep,
    step,
  } = props;

  return (
    <React.Fragment>
      <div className="modal">
        <div className="modal__dialog">
          <div className="modal__content">
            <div className="modal__header">
              <h3 className="modal__title">Регистрация</h3>

              <button
                className="modal__close"
                data-dismiss="modal"
                aria-hidden="true"
                onClick={closePopup}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" width="19" height="19" fill="none">
                  <path d="M18.3847 16.2635C18.7753 16.654 18.7753 17.2871 18.3847 17.6777L17.6776 18.3848C17.2871 18.7753 16.6539 18.7753 16.2634 18.3848L9.54591 11.6673L2.8284 18.3848C2.43787 18.7753 1.8047 18.7753 1.41418 18.3848L0.707075 17.6777C0.316554 17.2871 0.316554 16.654 0.707075 16.2635L7.42459 9.54594L0.707077 2.82843C0.316556 2.43791 0.316557 1.80473 0.707077 1.41421L1.41418 0.707106C1.80471 0.316585 2.43788 0.316585 2.8284 0.707106L9.54591 7.42462L16.2634 0.707109C16.6539 0.316588 17.2871 0.316588 17.6776 0.707109L18.3847 1.41422C18.7753 1.80474 18.7753 2.43791 18.3847 2.82843L11.6672 9.54594L18.3847 16.2635Z"/>
                </svg>
              </button>
            </div>

            <div className="modal__body">
              <WithFormWrapped
                closePopup={closePopup}
                formButtonDisabled={formButtonDisabled}
                setButtonState={setButtonState}
                setStep={setStep}
                step={step}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

PopupModal.propTypes = {
  closePopup: functionType,
  formButtonDisabled: isBoolType,
  setButtonState: functionType,
  setStep: functionType,
  step: isNumberType,
};

export default PopupModal;
