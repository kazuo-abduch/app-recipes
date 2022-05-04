import { useEffect, useState } from 'react';

const useFoods = () => {
  const foodUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const [foodData, setFoodData] = useState([]);
  const TWELVE = 12;
  useEffect(() => {
    fetch(foodUrl)
      .then((response) => response.json())
      .then(({ meals }) => setFoodData(meals.slice(0, TWELVE)));
  }, []);
  return foodData;
};
export default useFoods;
