import React from 'react';

export const CartItem = (props) => {
const {id, productName, price, productImage} = props.data;

  return ( 
  <div className='cartItem'> 
  <div className='cartItemImage' style={{ backgroundImage: `url(${productImage})` }}> </div>
 
  <h1> {productName}</h1>
  <p> {price}rsd</p>
  </div>

  );
};

