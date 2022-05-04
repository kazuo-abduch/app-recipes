import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';
import './Explore.css';

function Explore() {
  const { setSearchBtn } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(false);
  });
  return (
    <section>
      <Header pageName="Explore" />
      <section className="content">
        <Link to="/explore/foods" className="explore__section">
          <div data-testid="explore-foods" className="explore-btn">Explore Foods</div>
        </Link>
        <Link to="/explore/drinks" className="explore__section">
          <div data-testid="explore-drinks" className="explore-btn">Explore Drinks</div>
        </Link>
      </section>
      <Footer />
    </section>
  );
}

export default Explore;
