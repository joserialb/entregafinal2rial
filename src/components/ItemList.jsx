// src/components/ItemList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function ItemList({ products }) {
  if (!Array.isArray(products) || products.length === 0) {
    return <div className="alert alert-info">No hay productos disponibles.</div>;
  }

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <Item product={product} />
        </div>
      ))}
    </div>
  );
}

ItemList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ItemList;
