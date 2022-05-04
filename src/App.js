import React from 'react';
import './App.css';
import Routes from './Routes/Routes';
import RecipeProvider from './Components/RecipesProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <RecipeProvider>
      <Routes />
    </RecipeProvider>
  );
}

export default App;
