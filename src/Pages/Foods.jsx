import React, { useContext, useEffect } from 'react';
import CardList from '../Components/CardList';
import CategoryButtons from '../Components/CategoryButtons';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';
import Filtered from '../Components/Filtered';
import Loading from '../Components/Loading';

function Foods() {
  const {
    setSearchBtn,
    filter,
    isLoading,
    mealsArray,
    setIsLoading,
    filteredIngredient,
  } = useContext(RecipeContext);

  useEffect(() => {
    setSearchBtn(true);
  });

  useEffect(() => {
    if (mealsArray.length !== 0) {
      setIsLoading(false);
    }
  }, [mealsArray, setIsLoading]);

  return (
    isLoading ? <Loading /> : (
      <div>
        <div>
          <Header pageName="Foods" />
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

export default Foods;
