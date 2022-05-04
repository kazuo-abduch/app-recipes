import React from 'react';
import { render, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../Components/Footer';

describe('Testa ícones do footer', () => {
  it('Footer contém ícone de bebidas', () => {
    const { getByTestId } = render(<Footer />);
    const { getByText } = within(getByTestId('footer'));
    expect(getByText(/drink/i)).toBeInTheDocument();
  });
  it('Footer contém ícone de explorar', () => {
    const { getByTestId } = render(<Footer />);
    const { getByText } = within(getByTestId('footer'));
    expect(getByText(/explore/i)).toBeInTheDocument();
  });
  it('Footer contém ícone de comidas', () => {
    const { getByTestId } = render(<Footer />);
    const { getByText } = within(getByTestId('footer'));
    expect(getByText(/meal/i)).toBeInTheDocument();
  });
});
