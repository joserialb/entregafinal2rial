// src/components/Item.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Item({ product }) {
  const [showDescription, setShowDescription] = useState(false);

  // Alterna la visibilidad de la descripción
  const toggleDescription = () => setShowDescription(!showDescription);

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
        <button className="btn btn-link" onClick={toggleDescription}>
          {showDescription ? 'Ocultar descripción' : 'Ver descripción'}
        </button>
        {showDescription && (
          <p className="card-text mt-2">{product.description}</p>
        )}
        <Link to={`/item/${product.id}`} className="btn btn-primary mt-3">
          Ver detalles
        </Link>
      </div>
    </div>
  );
}

export default Item;

