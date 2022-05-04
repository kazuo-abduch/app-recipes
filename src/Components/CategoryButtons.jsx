import React, { useContext, useRef, useEffect } from 'react';
import './CategoryButtons.css';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import RecipeContext from '../Context/RecipeContext';

function CategoryButtons() {
  const {
    foodCategoriesArray,
    drinkCategoriesArray,
    setFilter,
    filter,
    fetchDrinkCategories,
    fetchFoodCategories,
    setDrinkCategoriesArray,
    setFoodCategoriesArray,
  } = useContext(RecipeContext);

  const previousFilter = useRef('');

  useEffect(() => {
    previousFilter.current = filter;
  }, [filter]);

  useEffect(() => {
    setFoodCategoriesArray(fetchFoodCategories);
    setDrinkCategoriesArray(fetchDrinkCategories);
  }, [
    fetchFoodCategories,
    fetchDrinkCategories,
    setDrinkCategoriesArray,
    setFoodCategoriesArray,
  ]);

  const { pathname } = useLocation();

  const submitFilter = ({ target }) => {
    const { textContent } = target;
    setFilter(textContent);
    if (textContent === previousFilter.current) {
      setFilter('');
    }
  };

  function generateCategoriesButtons() {
    if (pathname === '/foods') {
      return (
        <div className="buttons__container">
          {foodCategoriesArray.map((meal, index) => (
            <Button
              key={ index }
              btnClass="button__item btn-lg btn-block"
              btnMethod={ submitFilter }
              btnTestId={ `${meal.strCategory}-category-filter` }
              btnText={ meal.strCategory }
              btnDisabled={ false }
            />
          ))}
          <Button
            btnClass="button__item btn-lg btn-block"
            btnMethod={ () => setFilter('') }
            btnTestId="All-category-filter"
            btnText="All"
          />
        </div>
      );
    }
    if (pathname === '/drinks') {
      return (
        <div className="buttons__container">
          {drinkCategoriesArray.map((drink, index) => (
            <Button
              key={ index }
              btnClass="button__item btn-lg btn-block"
              btnMethod={ submitFilter }
              btnTestId={ `${drink.strCategory}-category-filter` }
              btnText={ drink.strCategory }
              btnDisabled={ false }
            />
          ))}
          <Button
            btnClass="button__item btn-lg btn-block"
            btnMethod={ () => setFilter('') }
            btnTestId="All-category-filter"
            btnText="All"
          />
        </div>
      );
    }
  }

  return (
    <div>
      {generateCategoriesButtons()}
    </div>
  );
}

export default CategoryButtons;
