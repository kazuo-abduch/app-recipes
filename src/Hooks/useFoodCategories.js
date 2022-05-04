import { useState, useEffect } from 'react';

const useFoodCategories = () => {
  const foodURL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const FIVE = 5;
  const [foodCategories, setFoodCategories] = useState([]);
  useEffect(() => {
    fetch(foodURL)
      .then((response) => response.json())
      .then(({ meals }) => setFoodCategories(meals.slice(0, FIVE)));
  }, []);
  return foodCategories;
};

export default useFoodCategories;
