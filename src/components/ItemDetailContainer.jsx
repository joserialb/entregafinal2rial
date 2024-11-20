import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getProducts, getProductsByCategory } from '../services/productService';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // 'id' será el parámetro de la categoría

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let result;
        if (id) {
          result = await getProductsByCategory(id); // Usamos el id para filtrar por categoría
        } else {
          result = await getProducts(); // Si no hay id, mostramos todos los productos
        }
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Aquí podrías establecer un estado de error si lo deseas
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]); // Dependencia en el id para recargar los productos al cambiar la categoría

  if (loading) {
    return <div className="container mt-4">Cargando productos...</div>;
  }

  return (
    <div className="container mt-4">
      <h2>{id ? `Productos de ${id}` : 'Todos los productos'}</h2>
      {products.length > 0 ? (
        <ItemList products={products} /> // Pasamos los productos a ItemList para que se muestren
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
}

export default ItemListContainer;


