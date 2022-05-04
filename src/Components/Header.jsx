import React, { useContext } from 'react';
import PropType from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './SearchBar';
import searchIcon from '../images/searchIcon.svg';
import RecipeContext from '../Context/RecipeContext';

function Header(props) {
  const { pageName } = props;
  const history = useHistory();
  const { searchBar, setSearchBar, hasSearch } = useContext(RecipeContext);

  function renderSearchButton() {
    return (
      <input
        data-testid="search-top-btn"
        type="image"
        src={ searchIcon }
        alt="search icon"
        onClick={ () => { setSearchBar(!searchBar); } }
      />
    );
  }

  return (
    <section className="d-flex flex-column align-items-center">
      <header
        className="d-flex
      flex-row
      justify-content-between
      w-100
      bg-white
      shadow p-4 bg-body rounded
      "
      >
        <input
          data-testid="profile-top-btn"
          type="image"
          src={ profileIcon }
          alt="profile icon"
          onClick={ () => history.push('/profile') }
        />
        <div data-testid="page-title" className="ml-4">
          <h3 className="font-weight-bold">{ pageName }</h3>
        </div>
        { hasSearch && renderSearchButton() }
      </header>
      { searchBar && <SearchBar pageName={ pageName } /> }
    </section>
  );
}

Header.propTypes = {
  pageName: PropType.string.isRequired,
};

export default Header;
