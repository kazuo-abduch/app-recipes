import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../Pages/Login/Login';
import renderWithRouter from '../Helpers/renderWithRouter';

const emailInput = screen.queryByPlaceholderText(/Email/i);
const passwordInput = screen.queryByPlaceholderText(/Senha/i);

describe('Testa o componente Login', () => {
  it('Testa se o componente Login se encontra na URL "/"', () => {
    const { history } = renderWithRouter(<Login />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('Testa se existe um input de email', () => {
    renderWithRouter(<Login />);
    expect(emailInput).toBeDefined();
  });

  it('Testa se existe um input de senha', () => {
    renderWithRouter(<Login />);
    expect(passwordInput).toBeDefined();
  });

  it('Testa se é possível digitar no input de email', () => {
    renderWithRouter(<Login />);
    userEvent.type(screen.queryByPlaceholderText('Email'), 's');
    expect(screen.queryByPlaceholderText('Email')).toHaveValue('s');
  });

  it('Testa se é possível digitar no input de senha', () => {
    renderWithRouter(<Login />);
    userEvent.type(screen.queryByPlaceholderText('Senha'), 's');
    expect(screen.queryByPlaceholderText('Senha')).toHaveValue('s');
  });

  it('Testa se existe um botão com o texto Enter', () => {
    renderWithRouter(<Login />);
    expect(screen.getByText(/Enter/i)).toBeInTheDocument();
  });
});
