import React from 'react';

const Topbar = ({ onMenuClick }) => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <button className="menu-button" onClick={onMenuClick}>☰</button>
        <h2>Products grid</h2>
      </div>
      <div className="topbar-right">
        <button className="btn">Export</button>
        <button className="btn dark">Create New</button>
      </div>
    </div>
  );
};

export default Topbar;