import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import CreateProducts from './CreateProducts';

describe('CreateProduct Component', () => {
  test('renders product name input and updates value correctly', () => {
    render(
      <Provider store={store}>
        <CreateProducts />
      </Provider>
    );

    const productNameInput = screen.getByLabelText('Product Name');

    fireEvent.change(productNameInput, { target: { value: 'Test Product' } });
    expect(productNameInput).toHaveValue('Test Product');
  });

  test('validates product name with invalid characters', async () => {
    render(
      <Provider store={store}>
        <CreateProducts />
      </Provider>
    );

    const productNameInput = screen.getByLabelText('Product Name');

    fireEvent.change(productNameInput, { target: { value: '@#Product' } });
    const productNameError = await screen.findByText(
      /Produk name tidak boleh mengandung symbol/i
    );

    expect(productNameError).toBeInTheDocument();
  });

  test('validates product name length (25 Characters)', async () => {
    render(
      <Provider store={store}>
        <CreateProducts />
      </Provider>
    );

    const productNameInput = screen.getByLabelText('Product Name');

    fireEvent.change(productNameInput, {
      target: {
        value: 'iniadalahteksyangpanjangnyamelebihduapuluhlimakarakterwkwk',
      },
    });
    
    const productNameLengthError = await screen.findByText(
      /Produk name tidak boleh lebih dari 25 karakter./i
    );

    expect(productNameLengthError).toBeInTheDocument();
  });

});
