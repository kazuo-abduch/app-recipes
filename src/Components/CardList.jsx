import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RecipeContext from '../Context/RecipeContext';
import RecipeCard from './RecipeCard';
import './CardList.css';

function CardList() {
  const {
    drinksArray,
    mealsArray,
    filteredIngredient,
  } = useContext(RecipeContext);
  const { pathname } = useLocation();

  function renderList() {
    if (pathname === '/foods' && filteredIngredient !== true) {
      return (
        <div className="container__recipes">
          <div className="container__items">
            {mealsArray.map((meal, index) => (
              <Link
                to={ `/foods/${meal.idMeal}` }
                key={ index }
              >
                <RecipeCard
                  recipeCardId={ `${index}-recipe-card` }
                  cardClass="recipe__card"
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

    if (pathname === '/drinks' && filteredIngredient !== true) {
      return (
        <div className="container__recipes">
          <div className="container__items">
            {drinksArray.map((drink, index) => (
              <Link
                to={ `/drinks/${drink.idDrink}` }
                key={ index }
              >
                <RecipeCard
                  recipeCardId={ `${index}-recipe-card` }
                  cardClass="recipe__card  shadow-sm"
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
  }

  return (
    <div>
      {(renderList())}
    </div>
  );
}

// CardList.propTypes = {
//   history: PropTypes.objectOf(PropTypes.func).isRequired,
// };
export default CardList;
