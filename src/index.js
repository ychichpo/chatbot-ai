import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GameProvider } from './GameContext';
import Home from './Home';
import Animateur from './Animateur';
import Joueur from './Joueur';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GameProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animateur" element={<Animateur />} />
        <Route path="/joueur" element={<Joueur />} />
      </Routes>
    </GameProvider>
  </BrowserRouter>
);
