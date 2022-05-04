import React, { useEffect, useContext } from 'react';
import CardList from '../Components/CardList';
import CategoryButtons from '../Components/CategoryButtons';
import Filtered from '../Components/Filtered';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';
import Loading from '../Components/Loading';

function Drinks() {
  const {
    setSearchBtn,
    filter,
    isLoading,
    setIsLoading,
    drinksArray,
    filteredIngredient,
  } = useContext(RecipeContext);

  useEffect(() => {
    setSearchBtn(true);
  });

  useEffect(() => {
    if (drinksArray.length !== 0) {
      setIsLoading(false);
    }
  }, [drinksArray, setIsLoading]);

  return (
    isLoading ? <Loading /> : (
      <div>
        <div>
          <Header pageName="Drinks" />
        </div>
        <div className="d-flex flex-row justify-content-center mt-4">
          <CategoryButtons />
        </div>
        <section>
          {filter === ''
            && filteredIngredient === false ? (<CardList />) : (<Filtered />)}
        </section>
        <div>
          <Footer />
        </div>
      </div>
    ));
}

export default Drinks;
