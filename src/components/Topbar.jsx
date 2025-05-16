import React from 'react';


const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
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
