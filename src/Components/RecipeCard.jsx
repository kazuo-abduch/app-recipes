import PropTypes from 'prop-types';
import React from 'react';

function RecipeCard({
  recipeCardId,
  cardImgId,
  imgSrc,
  imgStr,
  cardName,
  cardClass,
  cardStrClass,
  recipeCardContainer,
}) {
  return (
    <div className={ recipeCardContainer }>
      <div data-testid={ recipeCardId } className={ cardClass }>
        <img data-testid={ cardImgId } src={ imgSrc } alt={ imgStr } />
      </div>
      <span data-testid={ cardName } className={ cardStrClass }>{imgStr}</span>
    </div>
  );
}

RecipeCard.defaultProps = {
  recipeCardId: '',
  cardClass: '',
  cardImgId: '',
  imgStr: '',
  cardStrClass: '',
  imgSrc: '',
  recipeCardContainer: '',
};

RecipeCard.propTypes = {
  cardClass: PropTypes.string,
  cardImgId: PropTypes.string,
  recipeCardContainer: PropTypes.string,
  imgSrc: PropTypes.string,
  cardStrClass: PropTypes.string,
  imgStr: PropTypes.string,
  recipeCardId: PropTypes.string,
  cardName: PropTypes.string.isRequired,
};

export default RecipeCard;
