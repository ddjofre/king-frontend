import React from 'react';
import './../../assets/styles/game.css';

const RectanguloTropas = ({ color }) => {
  console.log('Renderizando RectanguloTropas', color);
  return (
    <rect x="70px" y="70px" className={`rectangulo-tropas-${color}`} />
  );
};

export default RectanguloTropas;