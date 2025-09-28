// import { Suspense,lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div >

      <Routes>
        <Route path='/Home' element = {<Header />} />
       
     </Routes>
      <Footer />

    
      
    </div>
  );
}

export default App;
