const urlFilterDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/';
const urlFilterFoods = 'https://www.themealdb.com/api/json/v1/1/';
let urlFilter = '';
const errorMessage = 'Sorry, we haven\'t found any recipes for these filters.';

const getRecipesByFilter = async (type, filter, input) => {
  if (type === 'Foods') {
    urlFilter = urlFilterFoods;
  } else if (type === 'Drinks') {
    urlFilter = urlFilterDrinks;
  }
  let choosenFilter = `filter.php?i=${input}`;
  switch (filter) {
  case 'Name':
    choosenFilter = `search.php?s=${input}`;
    break;
  case 'First Letter':
    choosenFilter = `search.php?f=${input}`;
    break;
  default:
    choosenFilter = `filter.php?i=${input}`;
  }
  console.log(`${urlFilter}${choosenFilter}`);
  try {
    const response = await fetch(`${urlFilter}${choosenFilter}`);
    const responseJson = await response.json();
    const key = Object.keys(responseJson);
    console.log(key);
    if (!responseJson[key]) {
      global.alert(errorMessage);
    }
    return responseJson;
  } catch (error) {
    console.log(error);
    global.alert(errorMessage);
  }
};

export default getRecipesByFilter;
