import React from 'react';
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./menu.css";

export const Menu = () => {
 
  return (
    
    <div className='menu'>
      <h1 className='menuTitle'> Menu </h1> 
      
      
      <div className='products'> 
      {PRODUCTS.map((product) => (
      <Product data={product}/>
      ))}

      </div>
    </div>
    
  );
};

