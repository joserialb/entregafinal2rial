// src/hooks/useProducts.jsx
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "@/services/productService";

export const useProducts = (categoryId) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedProducts = categoryId
          ? await getProductsByCategory(categoryId)
          : await getProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        setError(err.message || "Error al cargar los productos");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryId]);

  return { products, loading, error };
};
