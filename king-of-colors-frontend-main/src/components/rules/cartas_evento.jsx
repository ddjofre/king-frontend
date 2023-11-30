import React from 'react';
import '../../assets/styles/rules.css';

function CartaEvento() {
    return(
        <>
            <div className = 'subtitulo_rules'>Cartas de Evento</div>

            <section>
                <p className = 'texto_rules'>
                    Las cartas de evento son:
                </p>
            </section>

            <section>
                <p className = 'texto_rules'>
                    <span className = "negrita_rules"> 1) El juego se mantiene: </span> En esta ronda no ocurre ninguna 
                    alteración. Es decir, como si no hubiera existido la carta de evento.
                </p>

                <p className = 'texto_rules'>
                    <span className = "negrita_rules"> 2) Mega producción: </span> Cada jugador que tenga una ficha de 
                    producción, podrá triplicar el nivel de producción del territorio en el que puso la ficha. 
                </p>

                <p className = 'texto_rules'>
                    <span className = "negrita_rules"> 3) Defensa doble: </span> Cada jugador que tenga una ficha de defensa, 
                    podrá quitarle el doble de jugadores, es decir, seis tropas al jugador que lo ataque. Sin embargo, 
                    solo se puede ocupar en un territorio por jugador, es decir, si tiene dos fichas de defensa el 
                    jugador solo podrá escoger una.
                </p>

                <p className = 'texto_rules'>
                    <span className = "negrita_rules"> 4) Doble movimiento: </span> Cada jugador que tenga un nivel de 
                    producción total mayor o igual a 8, podrá elegir poner otra ficha de movimiento en algún territorio 
                    de su elección (siguiendo las reglas establecidas de una ficha por territorio).

                </p>

                <p className = 'texto_rules'>
                    <span className = "negrita_rules"> 5) Muerte súbita: </span> A cada jugador se le elimina una ficha de defensa. 
                    Esto, solo si es que posee alguna. Si tiene más de una el jugador elegirá cual eliminar.
                </p>
            </section>
        </>
    );
}

export default CartaEvento;