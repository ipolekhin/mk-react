import React from "react";
import PopupModalComponent from "../popup-modal/popup-modal.jsx";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      step: -1,
      formButtonDisabled: true,
    };
    this.setButtonState = this.setButtonState.bind(this);
    this.setStep = this.setStep.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  render() {
    const {formButtonDisabled, showPopup, step} = this.state;

    return (
      <React.Fragment>
        <button
          className={`button ${step === 1 && `button--ok`}`}
          onClick={this.togglePopup}
          disabled={step === 1 ? true : false}
        >
          {step === 1 ? `Спасибо!` : `Регистрация`}
        </button>
        {showPopup && (
          <PopupModalComponent
            closePopup={this.togglePopup}
            formButtonDisabled={formButtonDisabled}
            setButtonState={this.setButtonState}
            setStep={this.setStep}
            step={step}
          />
        )}
      </React.Fragment>
    );
  }

  setStep(stepNext) {
    this.setState(() => ({
      step: stepNext,
    }));
  }

  setButtonState(formButtonDisabled) {
    this.setState(() => ({
      formButtonDisabled,
    }));
  }

  togglePopup() {
    this.setState((prevState) => ({showPopup: !prevState.showPopup}));
  }
}

export default App;
