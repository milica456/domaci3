import React, { useContext } from 'react';
import { MenuContext } from '../../context/menu-context'; 

export const Product = (props) => {
  const {id, productName, price, productImage} = props.data;
  const {addToCart, cartItems} = useContext(MenuContext);

  const cartItemAmount = cartItems[id];
     return (
    <div className='product'>
        <div style={ { backgroundImage: `url(${productImage})` }}> </div>
        <h1> {productName}</h1>
        <p> {price}rsd</p>
        <button className='addToCartBttn' onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button>
    </div>
  );
};


