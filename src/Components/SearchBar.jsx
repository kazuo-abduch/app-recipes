import React, { useContext, useState } from 'react';
import PropType from 'prop-types';
import { useHistory } from 'react-router-dom';
import getRecipesByFilter from '../Services';
import './SearchBar.css';
import RecipeContext from '../Context/RecipeContext';

function SearchBar(props) {
  const { pageName } = props;
  const { setDrinksArray, setMealsArray } = useContext(RecipeContext);
  const [filter, setFilter] = useState('Ingredient');
  const [input, setInput] = useState('');
  const history = useHistory();
  const TWELVE = 12;

  const validateInput = ({ value }) => {
    const error = 'Your search must have only 1 (one) character';
    if (filter === 'First Letter' && value.length > 1) {
      setInput(value.charAt(0));
      global.alert(error);
    }
  };

  const handleClick = async () => {
    const recipes = await getRecipesByFilter(pageName, filter, input);
    const key = Object.keys(recipes);
    if (recipes[key]) {
      let searchType = 'meals';
      let idType = 'idMeal';
      let pageType = '/foods/';
      if (pageName === 'Foods') {
        setMealsArray(recipes[searchType].slice(0, TWELVE));
      }
      if (pageName === 'Drinks') {
        searchType = 'drinks';
        idType = 'idDrink';
        pageType = '/drinks/';
        if (recipes.drinks.length > TWELVE) {
          setDrinksArray(recipes[searchType].slice(0, TWELVE));
        }
      }
      const size = recipes[searchType].length;
      const idRecipe = recipes[searchType][0][idType];
      if (size === 1) {
        history.push(`${pageType}${idRecipe}`);
      }
    }
  };

  return (
    <section className="search__container d-flex flex-column text-center">
      <div className="search__fields__container d-flex flex-column">
        <input
          className="search-input
          text-center
          form-control
          form-control-lg
          text-center
          "
          data-testid="search-input"
          type="text"
          placeholder="Search recipes"
          value={ input }
          onChange={ ({ target }) => { setInput(target.value); validateInput(target); } }
        />
        <div>
          <label htmlFor="input-ingredient">
            <input
              data-testid="ingredient-search-radio"
              type="radio"
              name="search"
              id="input-ingredient"
              value="Ingredient"
              className="radio-button"
              onChange={ ({ target }) => { setFilter(target.value); } }
            />
            Ingredients
          </label>
          <label htmlFor="input-name">
            <input
              data-testid="name-search-radio"
              type="radio"
              name="search"
              id="input-name"
              value="Name"
              className="radio-button"
              onChange={ ({ target }) => { setFilter(target.value); } }
            />
            Name
          </label>
          <label htmlFor="input-first">
            <input
              data-testid="first-letter-search-radio"
              type="radio"
              name="search"
              id="input-first"
              value="First Letter"
              className="radio-button"
              onChange={ ({ target }) => { setFilter(target.value); } }
            />
            First Letter
          </label>
        </div>
        <button
          data-testid="exec-search-btn"
          className="search-button btn-lg btn-block"
          type="button"
          onClick={ handleClick }
        >
          Search
        </button>
      </div>
    </section>
  );
}

SearchBar.propTypes = {
  pageName: PropType.string.isRequired,
};

export default SearchBar;
