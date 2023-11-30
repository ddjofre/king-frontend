import React from 'react';
import '../../assets/styles/rules.css';

function FichaAccion() {
    return(
        <>
            <div className = 'subtitulo_rules'>Fichas de Acción</div>

            <section>
                <p className = 'texto_rules'>
                    Existen 3 tipos de fichas de acción de las cuales los jugadores pueden elegir colocar en la fase de 
                    planificación. Los jugadores pueden colocar más de una vez el mismo tipo de ficha de acción. Por 
                    ejemplo, un jugador en su fase de planificación puede colocar tres fichas de movimiento sí lo desea, 
                    siempre y cuando sean en distintos territorios.
                </p>
            </section>

            <section>
                <p className = 'texto_rules'>
                    <span className = "negrita_rules"> 1) Ficha de Movimiento: </span> Esta ficha se puede activar en la fase de 
                    movimiento siguiendo las reglas descritas en esta fase.
                </p>

                <p className = 'texto_rules'>
                    <span className = "negrita_rules"> 2) Ficha de Defensa: </span> En un combate, sí la ficha de defensa 
                    está en territorio del ejército defensor, el ejército atacante perderá tres tropas inmediatamente 
                    (ver Combate).
                </p>

                <p className = 'texto_rules'>
                    <span className = "negrita_rules"> 3) Ficha de Producción: </span> En la fase de producción, las fichas de 
                    producción duplican el nivel de producción del territorio en que se encuentra tal ficha.
                </p>
            </section>
        </>
    );
}

export default FichaAccion;