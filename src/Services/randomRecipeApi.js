const urlRandomDrink = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const urlRandomFood = 'https://www.themealdb.com/api/json/v1/1/random.php';
let urlRandomRecipe = '';

async function fetchRandomRecipe(type) {
  if (type === 'food') {
    urlRandomRecipe = urlRandomFood;
  } else if (type === 'drink') {
    urlRandomRecipe = urlRandomDrink;
  }
  try {
    const response = await fetch(urlRandomRecipe);
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.log(error);
  }
}

export default fetchRandomRecipe;
