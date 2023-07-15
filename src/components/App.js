import React from 'react';
import Products from './products/Products';
import Footer from './Footer';
import AddProduct from './products/AddProduct';
import { BrowserRouter, Route } from "react-router-dom";

function App() { 

  return (
    <BrowserRouter>
      <Route path="/" exact component={Products} />
      <Route path="/addproduct" exact component={AddProduct} />
      <Footer />
    </BrowserRouter>
  )
}

export default App;