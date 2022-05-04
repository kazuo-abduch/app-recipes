import React from 'react';
import PropTypes from 'prop-types';

function Button({ btnType, btnMethod, btnTestId, btnText, btnDisabled, btnClass }) {
  return (
    <button
      className={ btnClass }
      type={ btnType ? 'submit' : 'button' }
      data-testid={ btnTestId }
      onClick={ btnMethod }
      disabled={ btnDisabled }
    >
      { btnText }
    </button>
  );
}

Button.defaultProps = {
  btnClass: '',
  btnType: 'button',
  btnMethod: () => {},
  btnTestId: '',
  btnText: '',
  btnDisabled: false,
};

Button.propTypes = {
  btnClass: PropTypes.string,
  btnType: PropTypes.string,
  btnMethod: PropTypes.func,
  btnTestId: PropTypes.string,
  btnText: PropTypes.string,
  btnDisabled: PropTypes.bool,
};

export default Button;
