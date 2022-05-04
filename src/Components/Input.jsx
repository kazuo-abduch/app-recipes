import React from 'react';
import PropTypes from 'prop-types';

function Input({
  inputTestId,
  inputType,
  inputPlaceHolder,
  inputValue,
  inputMethod,
  inputName,
  inputClass,
}) {
  return (
    <input
      data-testid={ inputTestId }
      className={ inputClass }
      type={ inputType }
      name={ inputName }
      placeholder={ inputPlaceHolder }
      value={ inputValue }
      onChange={ inputMethod }
    />
  );
}

Input.defaultProps = {
  inputPlaceHolder: '',
  inputValue: '',
  inputClass: '',
};

Input.propTypes = {
  inputTestId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputClass: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  inputPlaceHolder: PropTypes.string,
  inputValue: PropTypes.string,
  inputMethod: PropTypes.func.isRequired,
};

export default Input;
