import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Explore from '../Pages/Explore';
import renderWithRouter from '../Helpers/renderWithRouter';

// Testes do componente Explore

describe('Testa o componente Explore', () => {
  it('Verifica se o componente Explore se encontra na rota "/explore"',
    () => {
      const { history } = renderWithRouter(<Explore />);
      history.push('/explore');
      const { pathname } = history.location;
      expect(pathname).toBe('/explore');
    });

  it('Verifica se existem os botões de explorar drinks e comidas', () => {
    renderWithRouter(<Explore />);
    const getFoodBtn = screen.getByText(/Explore Foods/i);
    const getDrinksBtn = screen.getByText(/Explore Drinks/i);
    expect(getFoodBtn).toBeDefined();
    expect(getDrinksBtn).toBeDefined();
  });

  it('Verifica se ao clicar no botao Explore foods a rota muda para "/explore/foods"',
    () => {
      const { history } = renderWithRouter(<Explore />);
      userEvent.click(screen.getByTestId('explore-foods'));
      history.push('/explore/foods');
      const { location: { pathname } } = history;
      expect(pathname).toBe('/explore/foods');
    });

  it('Verifica se ao clicar no botao Explore drinks a rota muda para "/explore/drinks"',
    () => {
      const { history } = renderWithRouter(<Explore />);
      userEvent.click(screen.getByTestId('explore-drinks'));
      history.push('/explore/drinks');
      const { location: { pathname } } = history;
      expect(pathname).toBe('/explore/drinks');
    });
});
