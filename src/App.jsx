import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import ProductGrid from './components/ProductGrid';


const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <ProductGrid />
      </div>
    </div>
  );
};

export default App;
