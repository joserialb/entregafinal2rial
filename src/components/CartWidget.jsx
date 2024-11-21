// src/components/CartWidget.jsx
import React from 'react';
import { useCart } from '@/context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Para FontAwesome
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Ícono del carrito

const CartWidget = () => {
  const { cart } = useCart();

  // Total de artículos en el carrito
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-widget d-flex align-items-center">
      <FontAwesomeIcon icon={faShoppingCart} size="lg" className="me-2" />
      {totalItems > 0 && (
        <span className="badge bg-danger">{totalItems}</span>
      )}
    </div>
  );
};

export default CartWidget;





