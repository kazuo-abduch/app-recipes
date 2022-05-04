import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Explore.css';
import Header from '../Components/Header';
import SurpriseBtn from './SurpriseBtn';
import Footer from '../Components/Footer';
import RecipeContext from '../Context/RecipeContext';

function ExploreDrink() {
  const { setSearchBtn } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(false);
  });
  return (
    <>
      <Header pageName="Explore Drinks" />
      <div className="content">
        <Link to="/explore/drinks/ingredients" className="explore__section">
          <button
            data-testid="explore-by-ingredient"
            type="button"
            className="explore__section__btn"
          >
            By Ingredient
          </button>
        </Link>
        <SurpriseBtn
          type="drink"
          surpriseClass="explore__section"
          surpriseBtnClass="explore__section__btn"
        />
      </div>
      <Footer />
      <Footer />
    </>
  );
}

export default ExploreDrink;
