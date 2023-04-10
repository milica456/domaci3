import React from 'react';

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
     return (
    <div className='product'>
        <div style={{ backgroundImage: `url(${productImage})` }}> </div>
        <h1> {productName}</h1>
        <p> {price}rsd</p>
    </div>
  );
};


