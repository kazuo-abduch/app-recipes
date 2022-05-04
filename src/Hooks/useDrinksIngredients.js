import { useEffect, useState } from 'react';

const useDrinksIngredients = () => {
  const drinksIngredientsURL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  const [drinksIngredientsData, setDrinksIngredientsData] = useState([]);
  const TWELVE = 12;
  useEffect(() => {
    fetch(drinksIngredientsURL)
      .then((response) => response.json())
      .then(({ drinks }) => setDrinksIngredientsData(drinks.slice(0, TWELVE)));
  }, []);
  return drinksIngredientsData;
};
export default useDrinksIngredients;
