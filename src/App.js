import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Routes
import NavbarWeb from './components/Navbar/navbar';
import Home from './components/Home/Home';
import Medios from './components/Medios/Medios';
import Calidad from './components/Calidad/Calidad';
import Asistencia from './components/Asistencia/Asistencia';
import Ejercicio from './components/Ejercicio/Ejercicio';
import Consulta from './components/Consulta/Consulta';
import Altas from './components/Altas/Altas';
import Usuario from './components/Usuario/Usuario';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavbarWeb />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Medios" element={<Medios />} />
            <Route path="/Calidad" element={<Calidad />} />
            <Route path="/Asistencia" element={<Asistencia />} />
            <Route path="/Ejercicio" element={<Ejercicio />} />
            <Route path="/Consulta" element={<Consulta />} />
            <Route path="/Altas" element={<Altas />} />
            <Route path="/Usuario" element={<Usuario />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
