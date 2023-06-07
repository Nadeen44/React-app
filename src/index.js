import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.bundle'
import App from './App';
import Navbar from './components/Navbar';
import Slide from './components/Slide';
import Footer from './components/Footer';
import ProductList from './components/ProductList';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Slide />
    <ProductList />
    <Footer />
  </React.StrictMode>
);


