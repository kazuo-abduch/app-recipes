import React, { useEffect, useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Ingredients.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import RecipeContext from '../Context/RecipeContext';
import useDrinksIngredients from '../Hooks/useDrinksIngredients';
import RecipeCard from '../Components/RecipeCard';
import Loading from '../Components/Loading';

function ExploreDrinkIngredient() {
  const [drinksIngredientsArray, setDrinksIngredientsArray] = useState([]);
  const fetchDrinksIngredients = useDrinksIngredients();
  const { setSearchBtn, setFiltered, setFilteredIngredient } = useContext(RecipeContext);
  const loaded = useRef(false);

  useEffect(() => {
    setSearchBtn(false);
    setDrinksIngredientsArray(fetchDrinksIngredients);
  }, [setSearchBtn, fetchDrinksIngredients]);

  useEffect(() => {
    if (drinksIngredientsArray.length !== 0) {
      loaded.current = true;
    }
  }, [drinksIngredientsArray]);

  const setDrinkIngredientFilter = (filter) => {
    const TWELVE = 12;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filter}`)
      .then((response) => response.json())
      .then(({ drinks }) => setFiltered(drinks.slice(0, TWELVE)))
      .then(setFilteredIngredient(true));
  };

  const renderIngredients = () => {
    if (drinksIngredientsArray.length !== 0) {
      return (
        <div className="explore__ingredient__container">
          <div className="explore__ingredient__ingredients">
            {drinksIngredientsArray.map((ingredient, index) => (
              <Link
                to="/drinks"
                key={ index }
                onClick={ () => setDrinkIngredientFilter(ingredient.strIngredient1) }
              >
                <RecipeCard
                  recipeCardId={ `${index}-ingredient-card` }
                  cardImgId={ `${index}-card-img` }
                  imgSrc={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
                  imgStr={ ingredient.strIngredient1 }
                  cardName={ `${index}-card-name` }
                  cardClass="explore__ingredient__card"
                  cardStrClass="explore__ingredient__card__text"
                  recipeCardContainer="explore__ingredient__card__container"
                />
              </Link>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <Header pageName="Explore Ingredients" />
      {loaded ? (renderIngredients()) : (<Loading />)}
      <Footer />
    </>
  );
}

export default ExploreDrinkIngredient;
