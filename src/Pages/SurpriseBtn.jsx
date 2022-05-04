import React from 'react';
import PropType from 'prop-types';
import { useHistory } from 'react-router-dom';
import fetchRandomRecipe from '../Services/randomRecipeApi';

function SurpriseBtn({ type, surpriseBtnClass, surpriseClass }) {
  const history = useHistory();
  function handleClick() {
    const randomRecipe = fetchRandomRecipe(type);
    randomRecipe.then((response) => {
      const recipeType = Object.keys(response);
      const recipeObj = response[recipeType][0];
      const idType = Object.keys(recipeObj)[0];
      console.log(recipeObj[idType]);
      history.push(`/${type}s/${recipeObj[idType]}`);
    });
  }
  return (
    <div className={ surpriseClass }>
      <button
        data-testid="explore-surprise"
        type="button"
        onClick={ handleClick }
        className={ surpriseBtnClass }
      >
        Surprise me!
      </button>
    </div>
  );
}

SurpriseBtn.defaultProps = {
  surpriseClass: '',
  surpriseBtnClass: '',
};

SurpriseBtn.propTypes = {
  type: PropType.string.isRequired,
  surpriseBtnClass: PropType.string,
  surpriseClass: PropType.string,
};

export default SurpriseBtn;
