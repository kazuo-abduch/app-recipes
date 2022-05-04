const urlFood = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const objTest = {
  meals: [
    {
      idMeal: '52977',
      strMeal: 'Corba',
      strDrinkAlternate: null,
      strCategory: 'Side',
      strArea: 'Turkish',
      strInstructions: 'Pick through your lentils [...]',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
      strTags: 'Soup',
      strYoutube: 'https://www.youtube.com/watch?v=VVnZd8A84z4',
      strIngredient1: 'Lentils',
      strIngredient2: 'Onion',
      strIngredient3: 'Carrots',
      strIngredient4: 'Tomato Puree',
      strIngredient5: 'Cumin',
      strIngredient6: 'Paprika',
      strIngredient7: 'Mint',
      strIngredient8: 'Thyme',
      strIngredient9: 'Black Pepper',
      strIngredient10: 'Red Pepper Flakes',
      strIngredient11: 'Vegetable Stock',
      strIngredient12: 'Water',
      strIngredient13: 'Sea Salt',
      strIngredient14: '',
      strIngredient15: '',
      strIngredient16: '',
      strIngredient17: '',
      strIngredient18: '',
      strIngredient19: '',
      strIngredient20: '',
      strMeasure1: '1 cup ',
      strMeasure2: '1 large',
      strMeasure3: '1 large',
      strMeasure4: '1 tbs',
      strMeasure5: '2 tsp',
      strMeasure6: '1 tsp ',
      strMeasure7: '1/2 tsp',
      strMeasure8: '1/2 tsp',
      strMeasure9: '1/4 tsp',
      strMeasure10: '1/4 tsp',
      strMeasure11: '4 cups ',
      strMeasure12: '1 cup ',
      strMeasure13: 'Pinch',
      strMeasure14: ' ',
      strMeasure15: ' ',
      strMeasure16: ' ',
      strMeasure17: ' ',
      strMeasure18: ' ',
      strMeasure19: ' ',
      strMeasure20: ' ',
      strSource: 'https://findingtimeforcooking.com/main-dishes/red-lentil-soup-corba/',
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
  ],
};

async function fetchFoodDetails(id) {
  const urlApi = `${urlFood}${id}`;
  try {
    const response = await fetch(urlApi);
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.log(error);
    return objTest;
  }
}

export default fetchFoodDetails;
