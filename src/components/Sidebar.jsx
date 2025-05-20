import React from 'react';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo">Elisha</div>
        <ul className="nav-links">
          <li className="active">Products</li>
          <li>Add Products</li>
          <li>Products List</li>
          <li>Categories</li>
          <li>Brands</li>
        </ul>
      </aside>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
    </>
  );
};

export default Sidebar;