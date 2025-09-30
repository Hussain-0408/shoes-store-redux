// import { Suspense,lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CardItems from './components/CardItems';
import CartItems from './components/CartItems';
import PaymentPage from './components/PaymentPage';
import { Card } from 'react-bootstrap';




function App() {
  return (
    <div  className='bg-white'>
      <Header />
      <CartItems />
     
      <Routes>
        <Route path='/' element={<CardItems/>} />
        <Route path='/PaymentPage' element = {<PaymentPage/>} />
      </Routes>
      <Footer />
      



    </div>
  );
}

export default App;
