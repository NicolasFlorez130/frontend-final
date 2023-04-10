import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Details from './pages/Details';
import Heading from './components/layout/Heading';

function App() {

   return (
      <div className="App">
         <Heading />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="favoritos" element={<Favorites />} />
            <Route path="detalle/:id" element={<Details />} />
         </Routes>
      </div>
   );
}

export default App;
