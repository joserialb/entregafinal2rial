// src/components/ItemDetail.jsx
import React from 'react';
import { useCart } from '../contexts/CartContext';

function ItemDetail({ product }) {
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="alert alert-danger">
        Producto no encontrado. <a href="/">Volver al catálogo</a>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={product.image}
            className="img-fluid rounded-start"
            alt={product.name}
            onError={(e) => (e.target.src = '/fallback-image.jpg')}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text"><strong>Precio: ${product.price}</strong></p>
            <p className="card-text"><small className="text-muted">Categoría: {product.category}</small></p>
            <button className="btn btn-primary" onClick={() => addToCart(product)}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;

