import React from 'react';
import PropTypes from 'prop-types';

function Form({ formMethod, children, formClass }) {
  return (
    <form className={ formClass } onSubmit={ formMethod }>
      { children }
    </form>
  );
}

Form.defaultProps = {
  formClass: '',
};

Form.propTypes = {
  formClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  formMethod: PropTypes.func.isRequired,
};

export default Form;
