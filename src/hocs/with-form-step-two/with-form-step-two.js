import React from "react";
import {functionType} from "../../types/types.js";

const withFormStepOne = (Component) => {
  class WithForm extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        personalChecked: false,
      };
      this.handleFederalLawChange = this.handleFederalLawChange.bind(this);
    }

    _validateForm() {
      const {setButtonState} = this.props;

      const {
        personalChecked,
      } = this.state;

      const isActive = (
        !personalChecked
      );

      setButtonState(isActive);
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
