import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './ExploreFoodNation.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';
import Select from '../Components/Select';
import useNationality from '../Hooks/useNationality';
import RecipeCard from '../Components/RecipeCard';

function ExploreFoodNaton() {
  const { setSearchBtn, mealsArray } = useContext(RecipeContext);
  const [nationsArray, setNationsArray] = useState([]);
  const [nationValue, setNationValue] = useState('');
  const [filtered, setFiltered] = useState([]);
  const fetchNations = useNationality('list');
  const TWELVE = 12;
  useEffect(() => {
    setSearchBtn(true);
    setNationsArray(fetchNations);
    if (nationValue !== '') {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationValue}`)
        .then((response) => response.json())
        .then(({ meals }) => setFiltered(meals.slice(0, TWELVE)));
    }
  }, [fetchNations, setSearchBtn, nationValue]);

  const handleChangeSelect = ({ target }) => {
    const { value } = target;
    if (value === 'All') {
      setFiltered('');
    }
    setNationValue(value);
  };

  const renderMeals = () => {
    if (filtered.length !== 0) {
      return (
        <div>
          {filtered.map((meal, index) => (
            <Link
              to={ `/foods/${meal.idMeal}` }
              key={ index }
            >
              <RecipeCard
                recipeCardId={ `${index}-recipe-card` }
                cardImgId={ `${index}-card-img` }
                imgSrc={ meal.strMealThumb }
                imgStr={ meal.strMeal }
                cardName={ `${index}-card-name` }
              />
            </Link>
          ))}
        </div>
      );
    }
    return (
      <div>
        {mealsArray.map((meal, index) => (
          <Link
            to={ `/foods/${meal.idMeal}` }
            key={ index }
          >
            <RecipeCard
              key={ index }
              recipeCardId={ `${index}-recipe-card` }
              cardClass="recipe__card"
              cardImgId={ `${index}-card-img` }
              imgSrc={ meal.strMealThumb }
              imgStr={ meal.strMeal }
              cardName={ `${index}-card-name` }
            />
          </Link>
        ))}
      </div>
    );
  };

  return (
    <section className="food__nation__container">
      <Header pageName="Explore Nationalities" />
      <section className="food__nation__items">
        <section className="food__nation__select">
          <Select
            slcTestId="explore-by-nationality-dropdown"
            optionsArray={ nationsArray }
            slcName="nationValue"
            slcValue={ nationValue }
            slcMethod={ handleChangeSelect }
          />
        </section>
        <section className="food__nation__meals">
          {renderMeals()}
        </section>
      </section>
      <Footer />
    </section>
  );
}

export default ExploreFoodNaton;
