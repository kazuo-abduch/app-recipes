import React, { useState, useEffect, useContext } from 'react';
import PropType from 'prop-types';
import RecipeContext from '../Context/RecipeContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavButton({ recipe, testId }) {
  let currentRecipe = {};
  const recipeType = Object.values(recipe)[1];
  const firstKey = Object.keys(recipe)[0];
  const { setFavoriteList } = useContext(RecipeContext);
  if (firstKey === 'idMeal') {
    currentRecipe = {
      id: recipe.idMeal,
      type: 'food',
      nationality: recipe.strArea,
      category: recipe.strCategory,
      alcoholicOrNot: '',
      name: recipe.strMeal,
      image: recipe.strMealThumb,
    };
  } else if (firstKey === 'idDrink') {
    currentRecipe = {
      id: recipe.idDrink,
      type: 'drink',
      nationality: '',
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb,
    };
  } else if (recipeType === 'food' || recipeType === 'drink') {
    currentRecipe = recipe;
  }
  const [changeHeart, setHeart] = useState();
  const [favList, setFav] = useState();
  useEffect(() => {
    const idType = Object.keys(recipe)[0];
    function checkFavoriteLS() {
      let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      if (!favoriteRecipes) {
        favoriteRecipes = [];
      }
      return ({
        checkFavorite: favoriteRecipes.some((element) => element.id === recipe[idType]),
        favoriteRecipes,
      });
    }
    const { favoriteRecipes, checkFavorite } = checkFavoriteLS();
    setHeart(checkFavorite);
    setFav(favoriteRecipes);
  }, [recipe, changeHeart]);

  function handleFavoriteClick() {
    if (changeHeart) {
      const indexFav = favList.findIndex((element) => (
        element.id === currentRecipe.id));
      favList.splice(indexFav, 1);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favList));
      setFavoriteList(favList);
      setHeart(false);
    } else {
      favList.push(currentRecipe);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favList));
      setFavoriteList(favList);
      setHeart(true);
    }
  }
  return (
    <div>
      <input
        data-testid={ testId }
        type="image"
        src={ changeHeart ? blackHeartIcon : whiteHeartIcon }
        alt="fav button"
        onClick={ handleFavoriteClick }
      />
    </div>
  );
}

FavButton.defaultProps = {
  testId: '',
};

FavButton.propTypes = {
  recipe: PropType.objectOf(PropType.string).isRequired,
  testId: PropType.string,
};

export default FavButton;
