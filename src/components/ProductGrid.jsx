import React, { useState } from 'react';
import dummyProducts from '../data/products';

const ProductGrid = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="product-grid-container">
      <div className="product-controls">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="dropdown">
          <option>Category</option>
        </select>
        <button className="sort-button">Last Edit ⬍</button>
      </div>

      <div className="product-grid">
        {dummyProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <div className="product-info">
              <p>{product.title}</p>
              <p>{product.subtitle}</p>
              <p>{product.price}</p>
              <div className="actions">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button>Previous</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default ProductGrid;