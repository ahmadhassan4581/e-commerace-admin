import React from 'react';


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">Elisha</div>
      <ul className="nav-links">
        <li className="active">Products</li>
        <li>Add Products</li>
        <li>Products List</li>
        <li>Categories</li>
        <li>Brands</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
