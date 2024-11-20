// src/components/ItemListContainer.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { categoryId } = useParams(); // Obtenemos el parámetro de categoría
  const { products, loading, error } = useProducts(categoryId); // Pasamos categoryId al hook

  if (loading) return <div className="text-center">Cargando productos...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-4">
      <h2>{categoryId ? `Productos de ${categoryId}` : "Todos los productos"}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

