import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import './RecipeDoneCard.css';
import ShareButton from './ShareButton';

// componente Card receitas prontas

function RecipeDoneCard({
  image, index, category, name, date, tags, urlShare, linkPath }) {
  function renderTags() {
    return (
      tags.map((tag, tagIndex) => (
        <span
          key={ tagIndex }
          data-testid={ `${index}-${tag}-horizontal-tag` }
        >
          { tag }
          &ensp;
        </span>
      ))
    );
  }

  return (
    <div className="recipe__done__container">
      <section className="recipe__done__img__container">
        <Link to={ linkPath }>
          <img
            src={ image }
            alt={ name }
            data-testid={ `${index}-horizontal-image` }
            className="recipe__done__img"
          />
        </Link>
      </section>

      <div className="recipe__done__text__container">
        <div
          data-testid={ `${index}-horizontal-top-text` }
          className="recipe__done__text__category"
        >
          <h2>{ category }</h2>
        </div>

        <Link to={ linkPath }>
          <div
            data-testid={ `${index}-horizontal-name` }
            className="recipe__done__text__name"
          >
            <h3>{ name }</h3>
          </div>

        </Link>

        <div
          data-testid={ `${index}-horizontal-done-date` }
          className="recipe__done__data"
        >
          <span>{ date }</span>
        </div>
        <ShareButton
          testId={ `${index}-horizontal-share-btn` }
          urlShare={ urlShare }
        />
        <div
          data-testid={ `${index}-horizontal-tag` }
          className="recipe__done__ingredients"
        >
          { renderTags() }
        </div>
      </div>
    </div>
  );
}

RecipeDoneCard.propTypes = {
  image: PropType.string.isRequired,
  index: PropType.number.isRequired,
  category: PropType.string.isRequired,
  name: PropType.string.isRequired,
  date: PropType.string.isRequired,
  tags: PropType.arrayOf(PropType.string).isRequired,
  urlShare: PropType.string.isRequired,
  linkPath: PropType.string.isRequired,
};

export default RecipeDoneCard;
