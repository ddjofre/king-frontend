import React from "react";
import '../../assets/styles/about_us.css';
import Persona from "./persona";
import datos from "./datos";

function armaIntegrante(params) {
    return (
      <Persona
        nombre = {params.nombre}
        foto = {params.foto}
        descripcion = {params.descripcion}
      />
    );
  }

function Integrantes() {
    return <div>{datos.map((integrante) => armaIntegrante(integrante))}</div>;
}
  
export default Integrantes;