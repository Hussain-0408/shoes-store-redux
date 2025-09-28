// import { Suspense,lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CardItems from './components/CardItems';




function App() {
  return (
    <div >
      <Header />
      <CardItems />
      <Footer />



    </div>
  );
}

export default App;
