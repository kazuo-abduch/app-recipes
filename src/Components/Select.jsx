import React from 'react';
import PropTypes from 'prop-types';

function Select({ optionsArray, slcTestId, slcName, slcValue, slcMethod }) {
  return (
    <div>
      <select
        data-testid={ slcTestId }
        name={ slcName }
        value={ slcValue }
        onChange={ slcMethod }
      >
        <option data-testid="All-option">All</option>
        {optionsArray.map(({ strArea }, index) => (
          <option
            data-testid={ `${strArea}-option` }
            key={ index }
          >
            { strArea }
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  slcName: PropTypes.string,
  slcValue: PropTypes.string,
  slcTestId: PropTypes.string,
  optionsArray: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default Select;
