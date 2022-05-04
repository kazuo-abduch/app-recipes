import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeContext from '../Context/RecipeContext';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../Styles/style.css';
import './Footer.css';

/** Não botar nas seguintes telas:
 * Login
 * Detalhes de receita
 * Progresso de receita
 * Receitas feitas
 * Receitas favoritas
 */

function Footer() {
  const history = useHistory();
  const { setFilter, setFilteredIngredient } = useContext(RecipeContext);

  const drinkRedirect = () => {
    history.push('/drinks');
    setFilter('');
    setFilteredIngredient(false);
  };

  const mealRedirect = () => {
    history.push('/foods');
    setFilter('');
    setFilteredIngredient(false);
  };

  const exploreRedirect = () => {
    history.push('/explore');
  };
  return (
    <footer data-testid="footer" className="footer border-top bg-white fixed-bottom">
      <span
        id="drinkBtn"
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
        role="button"
        tabIndex={ 0 }
        type="image/svg+xml"
        onClick={ drinkRedirect }
        onKeyPress={ drinkRedirect }
      >
        <img src={ drinkIcon } alt="Drink Icon" className="drinkIcon" />
      </span>
      <span
        id="exploreBtn"
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
        type="image/svg+xml"
        role="button"
        tabIndex={ 0 }
        onClick={ exploreRedirect }
        onKeyPress={ exploreRedirect }
      >
        <img src={ exploreIcon } alt="Explore Icon" className="exploreIcon" />
      </span>
      <span
        id="mealBtn"
        data-testid="food-bottom-btn"
        src={ mealIcon }
        type="image/svg+xml"
        role="button"
        tabIndex={ 0 }
        onClick={ mealRedirect }
        onKeyPress={ mealRedirect }
      >
        <img src={ mealIcon } alt="Meal Icon" className="foodIcon" />
      </span>
    </footer>
  );
}

export default Footer;
