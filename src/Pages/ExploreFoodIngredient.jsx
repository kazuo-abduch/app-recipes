import React, { useEffect, useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Ingredients.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';
import useIngredients from '../Hooks/useIngredients';
import RecipeCard from '../Components/RecipeCard';
import Loading from '../Components/Loading';

function ExploreFoodIngredient() {
  const loaded = useRef(false);
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const { setSearchBtn, setFiltered, setFilteredIngredient } = useContext(RecipeContext);
  const fetchIngredients = useIngredients();

  useEffect(() => {
    setSearchBtn(false);
    setIngredientsArray(fetchIngredients);
  }, [fetchIngredients, setSearchBtn]);

  useEffect(() => {
    if (ingredientsArray.length !== 0) {
      loaded.current = true;
    }
  }, [ingredientsArray]);

  const setFoodsIngredientFilter = (filter) => {
    const TWELVE = 12;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${filter}`)
      .then((response) => response.json())
      .then(({ meals }) => setFiltered(meals.slice(0, TWELVE)))
      .then(setFilteredIngredient(true));
  };

  const renderIngredients = () => {
    if (ingredientsArray.length !== 0) {
      return (
        <div className="explore__ingredient__container">
          <div className="explore__ingredient__ingredients">
            {ingredientsArray.map((ingredient, index) => (
              <Link
                to="/foods"
                key={ index }
                onClick={ () => setFoodsIngredientFilter(ingredient.strIngredient) }
              >
                <RecipeCard
                  recipeCardId={ `${index}-ingredient-card` }
                  cardImgId={ `${index}-card-img` }
                  imgSrc={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
                  imgStr={ ingredient.strIngredient }
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

export default ExploreFoodIngredient;
