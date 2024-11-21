// src/components/ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getProducts, getProductsByCategory } from '../services/productService';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = categoryId
          ? await getProductsByCategory(categoryId)
          : await getProducts();

        if (result.length === 0) {
          setError(`No se encontraron productos en la categoría "${categoryId}".`);
        } else {
          setProducts(result);
        }
      } catch (err) {
        setError(`Error al cargar los productos: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) return <div className="text-center">Cargando productos...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-4">
      <h2>{categoryId ? `Productos de ${categoryId}` : 'Todos los productos'}</h2>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;


