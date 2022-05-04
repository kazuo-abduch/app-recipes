import React, { useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RecipeContext from '../Context/RecipeContext';
import RecipeCard from './RecipeCard';

function Filtered() {
  const {
    filter,
    filtered,
    setFiltered,
    filteredIngredient,
  } = useContext(RecipeContext);

  const { pathname } = useLocation();

  useEffect(() => {
    if (filter !== '' && filteredIngredient !== true && pathname === '/foods') {
      const TWELVE = 12;
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}`)
        .then((response) => response.json())
        .then(({ meals }) => setFiltered(meals.slice(0, TWELVE)));
    }
    if (filter !== '' && filteredIngredient !== true && pathname === '/drinks') {
      const TWELVE = 12;
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`)
        .then((response) => response.json())
        .then(({ drinks }) => setFiltered(drinks.slice(0, TWELVE)));
    }
  }, [filter, pathname, setFiltered, filteredIngredient]);

  const renderFiltered = () => {
    if (pathname === '/foods') {
      return (
        <div className="container">
          <div className="container__items">
            {filtered.map((meal, index) => (
              <Link
                to={ `/foods/${meal.idMeal}` }
                key={ index }
              >
                <RecipeCard
                  recipeCardId={ `${index}-recipe-card` }
                  cardImgId={ `${index}-card-img` }
                  imgSrc={ meal.strMealThumb }
                  imgStr={ meal.strMeal }
                  cardName={ `${index}-card-name` }
                />
              </Link>
            ))}
          </div>
        </div>
      );
    }
    if (pathname === '/drinks') {
      return (
        <div className="container">
          <div className="container__items">
            {filtered.map((drink, index) => (
              <Link
                to={ `/drinks/${drink.idDrink}` }
                key={ index }
              >
                <RecipeCard
                  recipeCardId={ `${index}-recipe-card` }
                  cardImgId={ `${index}-card-img` }
                  imgSrc={ drink.strDrinkThumb }
                  imgStr={ drink.strDrink }
                  cardName={ `${index}-card-name` }
                />
              </Link>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {(renderFiltered()) }
    </div>
  );
}

export default Filtered;
