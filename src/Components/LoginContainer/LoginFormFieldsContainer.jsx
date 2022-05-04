import React from 'react';
import PropTypes from 'prop-types';

function LoginFormFieldsContainer({ children }) {
  return (
    <div className="form-outline mb-4">
      {children}
    </div>
  );
}

LoginFormFieldsContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default LoginFormFieldsContainer;
