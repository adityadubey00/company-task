import React, { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import { Route, Routes } from 'react-router-dom';
import SingleProduct from './components/SingleProduct';

function App() {
  const [singleProductDetail, setSingleProductDetail] = useState({});

  function singleProduct(product){
    setSingleProductDetail(product);
  }




  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList singleProduct={singleProduct}/>} />
        <Route path="/product" element={<SingleProduct singleProductDetail={singleProductDetail}/>} />
      </Routes>
    </div>
  );
}

export default App;
