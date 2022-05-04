import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import RecipeContext from '../Context/RecipeContext';
import useFoodCategories from '../Hooks/useFoodCategories';
import useDrinkCategories from '../Hooks/useDrinkCategories';
import useFoods from '../Hooks/useFoods';
import useDrinks from '../Hooks/useDrinks';

function RecipeProvider(props) {
  const fetchFoodCategories = useFoodCategories();
  const fetchDrinkCategories = useDrinkCategories();
  const [hasSearch, setSearchBtn] = useState(true);
  const [filtered, setFiltered] = useState([]);
  const [searchBar, setSearchBar] = useState(false);
  const [mealsArray, setMealsArray] = useState([]);
  const [drinksArray, setDrinksArray] = useState([]);
  const [foodCategoriesArray, setFoodCategoriesArray] = useState([]);
  const [drinkCategoriesArray, setDrinkCategoriesArray] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [pathname, setPathname] = useState('');
  const fetchedFoods = useFoods();
  const fetchedDrinks = useDrinks();
  const [filter, setFilter] = useState('');
  const [filteredIngredient, setFilteredIngredient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { children } = props;

  useEffect(() => {
    setMealsArray(fetchedFoods);
    setDrinksArray(fetchedDrinks);
  }, [fetchedFoods, fetchedDrinks]);

  return (
    <RecipeContext.Provider
      value={ {
        hasSearch,
        setSearchBtn,
        searchBar,
        setSearchBar,
        mealsArray,
        setMealsArray,
        drinksArray,
        setDrinksArray,
        foodCategoriesArray,
        drinkCategoriesArray,
        setFoodCategoriesArray,
        setDrinkCategoriesArray,
        fetchDrinkCategories,
        fetchFoodCategories,
        filter,
        setFilter,
        pathname,
        setPathname,
        favoriteList,
        setFavoriteList,
        filtered,
        setFiltered,
        filteredIngredient,
        setFilteredIngredient,
        isLoading,
        setIsLoading,
      } }
    >
      {children}
    </RecipeContext.Provider>
  );
}

RecipeProvider.propTypes = {
  children: PropType.node.isRequired,
};

export default RecipeProvider;
