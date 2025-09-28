// import { Suspense,lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import MyCartSummary from './components/MyCartSummary';
import ProductCard from './components/ProductCard';


function App() {
  return (
    <div >
<Header/>
      <Routes>
       
         <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
       
     </Routes>
     <MyCartSummary/>
    
      <Footer />

    
      
    </div>
  );
}

export default App;
