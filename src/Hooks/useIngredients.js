import { useEffect, useState } from 'react';

const useIngredients = () => {
  const ingredientsURL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const [ingredientsData, setIngredientsData] = useState([]);
  const TWELVE = 12;
  useEffect(() => {
    fetch(ingredientsURL)
      .then((response) => response.json())
      .then(({ meals }) => setIngredientsData(meals.slice(0, TWELVE)));
  }, []);
  return ingredientsData;
};
export default useIngredients;
