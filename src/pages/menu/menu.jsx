import React, { useState } from 'react';
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./menu.css";

// Pretraga proizvoda po ceni
export const Menu = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const applyFilters = (product) => {
    const { price } = filters;

    // Vraca proizvode sa istom ili manjom cenom
    if (price && product.price > parseInt(price)) {
      return false;
    }

   
    return true;
  };

  const filteredProducts = PRODUCTS.filter(applyFilters);

  return (
    <div className='menu'>
      <h1 className='menuTitle'>Menu</h1>
      <div className='filters'>
        <label htmlFor='price'>Cena:</label>
        <input
          type='number'
          id='price'
          name='price'
          value={filters.price || ''}
          onChange={handleFilterChange}
        />
      </div>
      <div className='products'>
        {filteredProducts.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
