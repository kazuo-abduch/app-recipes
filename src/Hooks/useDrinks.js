import { useEffect, useState } from 'react';

const useDrinks = () => {
  const drinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const [drinkData, setDrinkData] = useState([]);
  const TWELVE = 12;
  useEffect(() => {
    fetch(drinkUrl)
      .then((response) => response.json())
      .then(({ drinks }) => setDrinkData(drinks.slice(0, TWELVE)));
  }, []);
  return drinkData;
};
export default useDrinks;
