// import { Suspense,lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';




function App() {
  return (
    <div >
      <Header />
      <Routes>

        {/* <Route path="/" element={<HomePage />} /> */}


      </Routes>


      <Footer />



    </div>
  );
}

export default App;
