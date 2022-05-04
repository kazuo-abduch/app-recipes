import React from 'react';
import PropTypes from 'prop-types';

function LoginContainer({ children }) {
  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100 w-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong" style={ { borderRadius: '1rem' } }>
            <div className="shadow-lg card-body p-5 text-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

LoginContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default LoginContainer;
