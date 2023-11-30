import React from 'react';
import '../../assets/styles/rules.css';

function Glosario() {
    return(
        <>
            <div className = 'subtitulo_rules'>Glosario</div>

            <section>
                <p className = 'texto_rules'>
                    <span className = "negrita_rules"> Controlar un territorio: </span> Un jugador controla un territorio 
                    cuando posee una o más tropas en dicho territorio.
                </p>

                <p className = 'texto_rules'>
                    <span className = "negrita_rules"> Ejército: </span> Conjunto de dos o más tropas en un territorio.
                </p>

                <p className = 'texto_rules'>
                    <span className = "negrita_rules"> Territorio: </span> Cada hexágono del tablero representa un territorio. 
                    Un territorio puede estar bajo el control de un jugador o puede estar vacío (sin tropas en él). Este 
                    posee un color (celeste, morado o naranja) o puede estar en blanco. Los territorios en blanco no 
                    cuentan a la hora de cumplir el requisito de victoria. Además, cada territorio posee un nivel de 
                    producción indicado en la esquina superior derecha. El límite de tropas por territorio es de 20.
                </p>

                <p className = 'texto_rules'>
                    <span className = "negrita_rules"> Tropa: </span> Unidad básica de combate del juego.
                </p>
            </section>
        </>
    );
}

export default Glosario;