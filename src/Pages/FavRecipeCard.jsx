import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import FavButton from '../Components/FavButton';
import ShareButton from '../Components/ShareButton';

function FavRecipeCard({ favFood, index }) {
  const urlFood = `/${favFood.type}s/${favFood.id}`;
  const currentUrl = window.location.href;
  const urlShare = currentUrl.replace('/favorite-recipes', urlFood);
  if (favFood.type === 'food') {
    return (
      <div className="recipe-card-conteiner">
        <Link to={ urlFood }>
          <div className="fav-list-conteiner">
            <img
              data-testid={ `${index}-horizontal-image` }
              src={ favFood.image }
              alt="foto receita"
            />
            <div data-testid={ `${index}-horizontal-top-text` }>
              <span>
                { `${favFood.nationality} - ${favFood.category}` }
              </span>
              <div data-testid={ `${index}-horizontal-name` }>
                { favFood.name }
              </div>
            </div>
          </div>
        </Link>
        <div className="fav-btn-conteiner">
          <FavButton recipe={ favFood } testId={ `${index}-horizontal-favorite-btn` } />
          <ShareButton
            testId={ `${index}-horizontal-share-btn` }
            urlShare={ urlShare }
          />
        </div>
      </div>
    );
  } if (favFood.type === 'drink') {
    return (
      <div className="recipe-card-conteiner">
        <Link to={ urlFood }>
          <div className="fav-list-conteiner">
            <img
              data-testid={ `${index}-horizontal-image` }
              src={ favFood.image }
              alt=""
            />
            <span data-testid={ `${index}-horizontal-top-text` }>
              { favFood.alcoholicOrNot }
            </span>
            <div data-testid={ `${index}-horizontal-name` }>
              {favFood.name}
            </div>
          </div>
        </Link>
        <div className="fav-btn-conteiner">
          <FavButton recipe={ favFood } testId={ `${index}-horizontal-favorite-btn` } />
          <ShareButton
            testId={ `${index}-horizontal-share-btn` }
            urlShare={ urlFood }
          />
        </div>
      </div>
    );
  }
}

FavRecipeCard.propTypes = {
  favFood: PropType.objectOf(PropType.string).isRequired,
  index: PropType.number.isRequired,
};

export default FavRecipeCard;
