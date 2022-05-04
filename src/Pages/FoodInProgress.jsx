import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import { useHistory } from 'react-router-dom';
import './DetailsPage.css';
import fetchFoodDetails from '../Services/foodDetailsApi';
import FavButton from '../Components/FavButton';
import ShareButton from '../Components/ShareButton';

function FoodInProgress({
  match: {
    params: { id },
  },
}) {
  const history = useHistory();
  const [recipe, setRecipe] = useState({});
  const redirect = () => {
    let doneRecipe = JSON.parse(localStorage.getItem('doneRecipes'));
    if (!doneRecipe) {
      doneRecipe = [];
    }
    const date = new Date();
    const dateFunction = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const currRecipe = {
      id: recipe.idMeal,
      type: 'food',
      nationality: recipe.strArea,
      category: recipe.strCategory,
      alcoholicOrNot: '',
      name: recipe.strMeal,
      image: recipe.strMealThumb,
      doneDate: dateFunction,
      tags: recipe.strTags.split(', '),
    };
    doneRecipe.push(currRecipe);
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipe));
    history.push('/done-recipes');
  };
  const ingredientsKeys = [];
  const measurmentKey = [];
  const urlShare = window.location.href;
  useEffect(() => {
    function fetchRecipe() {
      fetchFoodDetails(id, 'food').then((response) => {
        setRecipe(...response.meals);
      });
    }
    fetchRecipe();
  }, [id]);
  function renderIngredients() {
    Object.keys(recipe).map((key) => {
      if (key.includes('Ingredient') && recipe[key] && recipe[key] !== '') {
        ingredientsKeys.push(key);
      }
      if (key.includes('Measure')) {
        measurmentKey.push(key);
      }
      return (ingredientsKeys, measurmentKey);
    });
    return ingredientsKeys.map((ingredient, index) => (
      <li key={ index } data-testid={ `${index}-ingredient-step` }>
        <div className="recipe__ingredient__container">
          <div>
            <input type="checkbox" style={ { margin: '10px' } } />
            <span className="recipe__ingredient__name">{`${recipe[ingredient]}`}</span>
          </div>
          <span
            className="recipe__ingredient__amount"
          >
            {`${recipe[measurmentKey[index]]}`}
          </span>
        </div>
      </li>
    ));
  }
  return (
    <section className="recipe__container">
      <section className="recipe__photo__container">
        <img
          src={ recipe.strMealThumb }
          alt={ recipe.strMealThumb }
          data-testid="recipe-photo"
          className="recipe-photo"
        />
      </section>

      <section className="recipe__info__container">

        <section className="recipe__title__container">
          <span data-testid="recipe-title">
            <h2 className="recipe__title__text">{ recipe.strMeal}</h2>
          </span>
        </section>

        <section className="recipe__icons__container">
          <ShareButton testId="share-btn" urlShare={ urlShare } />
          <FavButton testId="favorite-btn" recipe={ recipe } />
        </section>

      </section>

      <section className="recipe__category__container">
        <section className="recipe__category__text">
          <span data-testid="recipe-category">{ recipe.strCategory }</span>
        </section>

        <section className="recipe__list__container">
          <p>Ingredients</p>
          <ul className="recipe__list__list">
            { renderIngredients() }
          </ul>
        </section>

        <section className="recipe__instructions__container">
          <div data-testid="instructions">
            { recipe.strInstructions }
          </div>
        </section>

      </section>

      <section className="recipe__end__btn__container">
        <button
          type="button"
          data-testid="finish-recipe-btn"
          className="recipe__end__btn"
          value="Finalizar"
          onClick={ redirect }
        >
          Finalizar
        </button>
      </section>
    </section>
  );
}

FoodInProgress.propTypes = {
  match: PropType.shape({
    params: PropType.objectOf(PropType.string).isRequired,
  }).isRequired,
};

export default FoodInProgress;
