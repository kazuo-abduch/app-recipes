import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import RecomendedCard from './RecomendedCard';
import StartRecipeButton from '../Components/StartRecipeButton';
import FavButton from '../Components/FavButton';
import ShareButton from '../Components/ShareButton';
import fetchFoodDetails from '../Services/foodDetailsApi';
import useDrinks from '../Hooks/useDrinks';
import './DetailsPage.css';

function FoodDetails({ match: { params: { id } } }) {
  const fetchDrinks = useDrinks();
  const recomendedNumber = 6;
  const recomendedDrinks = fetchDrinks.slice(0, recomendedNumber);
  const [recipe, setRecipe] = useState({});
  const ingredientsKeys = [];
  const measurmentKey = [];
  const urlShare = window.location.href;

  useEffect(() => {
    function fetchRecipe() {
      fetchFoodDetails(id).then((response) => {
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
      return (
        ingredientsKeys, measurmentKey
      );
    });
    return (
      ingredientsKeys.map((ingredient, index) => (
        <li
          key={ index }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          <div className="recipe__ingredient__container">
            <span className="recipe__ingredient__name">{`${recipe[ingredient]}`}</span>
            <span
              className="recipe__ingredient_amount"
            >
              {`${recipe[measurmentKey[index]]}`}
            </span>
          </div>
        </li>
      ))
    );
  }

  function renderRecomendation() {
    return (
      recomendedDrinks.map((drink, index) => (
        <RecomendedCard
          key={ index }
          foods={ drink }
          index={ index }
          str="strDrink"
          thumb="strDrinkThumb"
        />
      ))
    );
  }

  return (
    <section className="recipe__container">

      <section className="recipe__photo__container">
        <img
          src={ recipe.strMealThumb }
          alt={ recipe.strMeal }
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
          <FavButton recipe={ recipe } testId="favorite-btn" />
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

      <section className="recipe__video__container">
        <iframe
          title="Recipe Video"
          data-testid="video"
          src={ recipe.strYoutube }
          frameBorder="0"
        />
      </section>

      <section className="recipe__recommended__container">
        { renderRecomendation() }
      </section>

      <section className="recipe__start__btn__container">
        <StartRecipeButton recipe={ recipe } idType="idMeal" />
      </section>

    </section>
  );
}

FoodDetails.propTypes = {
  match: PropType.shape({
    params: PropType.objectOf(PropType.string).isRequired,
  }).isRequired,
};

export default FoodDetails;
