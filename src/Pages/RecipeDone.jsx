import React, { useEffect, useContext, useState } from 'react';
import './RecipeDone.css';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';
import RecipeDoneCard from '../Components/RecipeDoneCard';

function RecipeDone() {
  const { setSearchBtn } = useContext(RecipeContext);
  const [filterDone, setFilterDone] = useState('');
  const [doneRecipesState, setRecipes] = useState([]);

  useEffect(() => {
    setSearchBtn(false);
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    setRecipes(doneRecipes);
  }, [setSearchBtn]);

  function handleClickAll() {
    setFilterDone('');
  }

  function handleClickFood() {
    setFilterDone('food');
  }

  function handleClickDrink() {
    setFilterDone('drink');
  }

  function renderCards() {
    return (
      doneRecipesState && doneRecipesState
        .filter((recipe) => recipe.type.includes(filterDone))
        .map((recipe, index) => {
          const currentUrl = window.location.href;
          let category = '';
          let url = '/foods/';
          if (recipe.type === 'drink') {
            url = '/drinks/';
            category = recipe.alcoholicOrNot;
          } else {
            category = `${recipe.nationality} - ${recipe.category}`;
          }
          const replaceUrl = currentUrl.replace('/done-recipes', url);
          const linkPath = `${url}${recipe[Object.keys(recipe)[0]]}`;
          const urlShare = `${replaceUrl}${recipe[Object.keys(recipe)[0]]}`;
          return (
            <RecipeDoneCard
              key={ index }
              image={ recipe.image }
              index={ index }
              category={ category }
              name={ recipe.name }
              date={ recipe.doneDate }
              tags={ recipe.tags }
              urlShare={ urlShare }
              linkPath={ linkPath }
            />
          );
        })
    );
  }

  return (
    <section className="recipe__done__container">
      <Header pageName="Done Recipes" />
      <section className="content">
        <div className="recipe__filter__container">
          <button
            type="button"
            data-testid="filter-by-all-btn"
            className="recipe__filter__btn"
            onClick={ handleClickAll }
          >
            All
          </button>
          <button
            type="button"
            data-testid="filter-by-food-btn"
            className="recipe__filter__btn"
            onClick={ handleClickFood }
          >
            Food
          </button>
          <button
            type="button"
            data-testid="filter-by-drink-btn"
            className="recipe__filter__btn"
            onClick={ handleClickDrink }
          >
            Drinks
          </button>
        </div>
        { renderCards() }
      </section>
    </section>
  );
}

export default RecipeDone;
