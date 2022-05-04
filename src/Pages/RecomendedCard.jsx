import React from 'react';
import PropType from 'prop-types';
import './DetailsPage.css';

function RecomendedCard({ foods, index, str, thumb }) {
  return (
    <div
      key={ index }
    >
      <img
        src={ foods[thumb] }
        alt=""
        className="recommended__img"
        data-testid={ `${index}-recomendation-card` }
      />
      <div>
        <span
          data-testid={ `${index}-recomendation-title` }
          className="recommended__text"
        >
          { foods[str] }
        </span>
      </div>
    </div>
  );
}

RecomendedCard.propTypes = {
  foods: PropType.objectOf(PropType.string).isRequired,
  index: PropType.number.isRequired,
  str: PropType.string.isRequired,
  thumb: PropType.string.isRequired,
};

export default RecomendedCard;
