// src/components/Item.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Item({ product }) {
  return (
    <div className="card h-100">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        onError={(e) => (e.target.src = '/fallback-image.jpg')} // Imagen de respaldo
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text"><strong>Precio: ${product.price}</strong></p>
        <Link to={`/item/${product.id}`} className="btn btn-primary mt-3">
          Ver detalles
        </Link>
      </div>
    </div>
  );
}

export default Item;


