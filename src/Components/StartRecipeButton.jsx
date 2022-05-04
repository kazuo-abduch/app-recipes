import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropType from 'prop-types';
import '../Pages/DetailsPage.css';

function StartRecipeButton(props) {
  const [isDone, setDone] = useState();
  const [inProgress, setProgress] = useState();
  const { recipe, idType } = props;
  const history = useHistory();

  useEffect(() => {
    function checkDone() {
      let doneList = JSON.parse(localStorage.getItem('doneRecipes'));
      if (!doneList) {
        doneList = [];
      }
      if (recipe && Object.entries(recipe).length > 0) {
        return (
          doneList.some((element) => element.id === recipe[idType])
        );
      }
    }
    setDone(!checkDone());
  }, [isDone, recipe, idType]);

  useEffect(() => {
    function checkProgress() {
      let progressList = JSON.parse(localStorage.getItem('inProgressRecipes'));
      if (!progressList) {
        progressList = {};
      }
      if (Object.entries(recipe).length > 0 && Object.entries(progressList).length > 0) {
        if (idType === 'idDrink') {
          return (
            Object.keys(progressList.cocktails).includes(recipe[idType])
          );
        } if (idType === 'idMeal') {
          return (
            Object.keys(progressList.meals).includes(recipe[idType])
          );
        }
      }
    }
    setProgress(checkProgress());
  }, [inProgress, recipe, idType]);

  function handleButtonText() {
    if (!inProgress) {
      return 'Start Recipe';
    }
    return 'Continue Recipe';
  }

  function handleClick() {
    if (idType === 'idDrink') {
      history.push(`/drinks/${recipe[idType]}/in-progress`);
    } else if (idType === 'idMeal') {
      history.push(`/foods/${recipe[idType]}/in-progress`);
    }
  }

  function renderButton() {
    return (
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="start-button"
        onClick={ handleClick }
      >
        { handleButtonText() }
      </button>
    );
  }

  return (
    <div>
      { isDone && renderButton() }
    </div>
  );
}

StartRecipeButton.propTypes = {
  recipe: PropType.objectOf(PropType.string).isRequired,
  idType: PropType.string.isRequired,
};

export default StartRecipeButton;
