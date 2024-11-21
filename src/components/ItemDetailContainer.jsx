// src/components/ItemDetailContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../services/productService';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedProduct = await getProductById(itemId);
        setProduct(fetchedProduct);
      } catch (err) {
        setError(`Error: Producto con ID "${itemId}" no encontrado.`);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  if (loading) return <div className="text-center">Cargando producto...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-4">
      <h2>Detalle del producto</h2>
      <button
        className="btn btn-secondary mb-3"
        onClick={() => navigate(-1)} // Navega a la página anterior
      >
        &larr; Regresar
      </button>
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid"
            onError={(e) => (e.target.src = '/fallback-image.jpg')}
          />
        </div>
        <div className="col-md-6">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>
            <strong>Precio:</strong> ${product.price}
          </p>
          <p>
            <strong>Categoría:</strong> {product.category}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;




