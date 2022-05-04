import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Explore.css';
import Header from '../Components/Header';
import SurpriseBtn from './SurpriseBtn';
import Footer from '../Components/Footer';
import RecipeContext from '../Context/RecipeContext';

function ExploreFood() {
  const { setSearchBtn } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(false);
  });
  return (
    <section>
      <Header pageName="Explore Foods" />
      <section className="content">
        <Link to="/explore/foods/ingredients" className="explore__section">
          <button
            data-testid="explore-by-ingredient"
            type="button"
            className="explore__section__btn"
          >
            By Ingredient
          </button>
        </Link>
        <Link to="/explore/foods/nationalities" className="explore__section">
          <button
            data-testid="explore-by-nationality"
            type="button"
            className="explore__section__btn"
          >
            By Nationality
          </button>
        </Link>
        <SurpriseBtn
          type="food"
          surpriseClass="explore__section"
          surpriseBtnClass="explore__section__btn"
        />
      </section>
      <Footer />
    </section>
  );
}

export default ExploreFood;
