import { useState, useEffect } from 'react';

const useNationality = () => {
  const nationURL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  const [nations, setNations] = useState([]);
  useEffect(() => {
    fetch(nationURL).then((response) => response.json())
      .then(({ meals }) => setNations(meals));
  }, []);
  return nations;
};

export default useNationality;
