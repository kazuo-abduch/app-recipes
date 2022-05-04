const urlDrink = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

async function fetchDrinkDetails(id) {
  const urlApi = `${urlDrink}${id}`;
  console.log(urlApi);
  try {
    const response = await fetch(urlApi);
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.log(error);
  }
}

export default fetchDrinkDetails;
