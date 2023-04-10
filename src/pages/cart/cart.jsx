import React, {useContext} from 'react'
import { PRODUCTS } from '../../products';
import { MenuContext } from '../../context/menu-context';
import { CartItem } from './cart-item';
import "./cart.css";
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(MenuContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return <div className='cart'>
    <div>
      <h1> Your Cart Items</h1>
    </div>
    <div className='cartItems'>
      {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0){
            return <CartItem data={product}/>
          }
      })}
    </div>
    {totalAmount >0 ? (
      <div className='checkout'>
      
      <p> Ukupno: rsd{totalAmount}</p>
      <button onClick={() => navigate("/menu")}> Nastavi kupovinu </button>
    </div>
 ) : ( <h1> Korpa je prazna  </h1>
 )}
  </div>
  
};


