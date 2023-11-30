import React from "react";
import '../../assets/styles/about_us.css';

function Persona(props) {
    return (
      <>
        <section className = "grilla_about_us">
        
            <div>
            <img className = "img_about_us" src={props.foto} alt="Integrante" />
            </div>

            <div>
                <p className = "subtitulo_about_us"> {props.nombre} </p>
                <p className = "texto_about_us"> {props.descripcion} </p>
            </div> 

        </section>
      </>
    );
  }
  
  export default Persona;