import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Profile.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';

function Profile() {
  const { setSearchBtn } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(false);
  });
  const email = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();
  const favoriteRedirect = () => {
    history.push('/favorite-recipes');
  };
  const doneRedirect = () => {
    history.push('/done-recipes');
  };
  const logout = () => {
    localStorage.clear();
    history.push('/');
  };
  return (
    <section className="profile__container">
      <Header pageName="Profile" />
      <section className="content">
        <span data-testid="profile-email">{email && email.email}</span>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ doneRedirect }
          className="profile__btn"
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ favoriteRedirect }
          className="profile__btn"
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ logout }
          className="profile__btn"
        >
          Logout
        </button>
      </section>
      <Footer />
    </section>
  );
}

export default Profile;
