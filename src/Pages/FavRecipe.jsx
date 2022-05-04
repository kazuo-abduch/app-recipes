import React, { useEffect, useContext, useState } from 'react';
import PropType from 'prop-types';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';
import FavRecipeCard from './FavRecipeCard';
import './FavRecipe.css';

function FavRecipe({ location: { pathname } }) {
  const {
    setSearchBtn,
    setPathname,
    favoriteList,
    setFavoriteList,
  } = useContext(RecipeContext);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const getFavRec = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setSearchBtn(false);
    setPathname(pathname);
    setFavoriteList(getFavRec);
  }, [pathname, setSearchBtn, setFavoriteList, setPathname]);

  function handleClickAll() {
    setFilter('');
  }

  function handleClickFood() {
    setFilter('food');
  }

  function handleClickDrink() {
    setFilter('drink');
  }

  function renderFavRecipes() {
    if (!favoriteList || favoriteList.length === 0) {
      return (
        <div>Sem receitas na lista</div>
      );
    }
    return (
      favoriteList
        .filter((favFood) => favFood.type.includes(filter))
        .map((favFood, index) => (
          <FavRecipeCard
            favFood={ favFood }
            key={ index }
            index={ index }
          />
        ))
    );
  }
  return (
    <>
      <Header pageName="Favorite Recipes" />
      <section className="content">
        <div className="filter-conteiner">
          <button
            type="button"
            data-testid="filter-by-all-btn"
            onClick={ handleClickAll }
          >
            All
          </button>
          <button
            type="button"
            data-testid="filter-by-food-btn"
            onClick={ handleClickFood }
          >
            Food
          </button>
          <button
            type="button"
            data-testid="filter-by-drink-btn"
            onClick={ handleClickDrink }
          >
            Drinks
          </button>
        </div>
      </section>
      <section>
        { renderFavRecipes() }
      </section>
    </>
  );
}

FavRecipe.propTypes = {
  location: PropType.shape({
    pathname: PropType.string.isRequired,
  }).isRequired,
};

export default FavRecipe;
