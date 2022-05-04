import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../Helpers/renderWithRouter';

describe('Testa o component App', () => {
  it('Testa se a página renderiza o componente Login', () => {
    renderWithRouter(<App />);
    const loginHeader = screen.getByRole('heading', { name: /Login/i });
    expect(loginHeader).toBeInTheDocument();
  });
});
