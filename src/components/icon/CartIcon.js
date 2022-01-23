import React from 'react';
import cartSvg from './logo.svg';
import './CartIcon.css';

const CartIcon = () => {
  return (
    <img src={cartSvg} alt="CartSvg" className="icono"></img>
  );
};

export default CartIcon;
