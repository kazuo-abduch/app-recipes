import { useState, useEffect } from 'react';

const useDrinkCategories = () => {
  const drinkURL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const FIVE = 5;
  const [drinkCategories, setDrinkCategories] = useState([]);
  useEffect(() => {
    fetch(drinkURL)
      .then((response) => response.json())
      .then(({ drinks }) => setDrinkCategories(drinks.slice(0, FIVE)));
  }, []);
  return drinkCategories;
};

export default useDrinkCategories;
