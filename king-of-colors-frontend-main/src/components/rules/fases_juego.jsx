import React from 'react';
import '../../assets/styles/rules.css';

function FasesJuego() {
    return(
        <>
            <div className = 'subtitulo_rules'>Fases de Juego</div>

            <section>
                <div className='subsubtitulo_rules'> 1) Fase de Planificación</div>
                
                    <p className = 'texto_rules'>
                        En esta fase, partiendo por el jugador inicial y, luego, en sentido horario, cada jugador colocará 
                        una ficha de acción (ver Fichas de Acción) en un territorio que controle, esto se hará por turnos. 
                        Los demás jugadores sabrán que existe una ficha en ese territorio, pero no conocerán de qué tipo es. 
                        De esta manera los jugadores tendrán un máximo de 3 fichas de acción en el tablero. Cabe 
                        destacar que solo puede existir una ficha de acción por territorio. Sí un jugador no tiene donde 
                        colocar fichas de acción, a este jugador se le salta durante el resto de esta fase. 
                    </p>
            </section>

            <section>
                <div className='subsubtitulo_rules'> 2) Fase de Evento</div>
                
                    <p className = 'texto_rules'>
                        Se revela una carta de evento (ver Cartas de Evento). Las cartas de evento pueden cambiar cero, 
                        una o más reglas durante esa ronda. Los efectos de una carta de evento solo duran durante la 
                        ronda en la que se reveló.
                    </p>
            </section>

            <section>
                <div className='subsubtitulo_rules'> 3) Fase de Producción</div>
                
                    <p className = 'texto_rules'>
                        Al comienzo de esta fase se revelan todas las fichas de acción de todos los jugadores simultáneamente. 
                        Luego, cada jugador producirá un número de tropas igual a la suma de todos los niveles de producción de 
                        cada territorio que controle. Por otro lado, las fichas de producción duplican el nivel de producción del 
                        territorio en el que están. Los jugadores deberán elegir los territorios que quieren que estas nuevas tropas 
                        se produzcan, respetando el límite de 20 tropas por territorio. Además, tendrán la oportunidad de redistribuir 
                        sus tropas entre sus propios territorios, es decir, con la restricción de que exista al menos una tropa en cada 
                        territorio controlado.
                    </p>

                    <p className = 'texto_rules'>
                        Esta fase se realiza por turno entre todos los jugadores. Luego de cada turno, partiendo por el jugador 
                        inicial, se mostrará en la pantalla, a todos los jugadores, la distribución escogida por el jugador 
                        del turno.
                    </p>
            </section>

            <section>
                <div className='subsubtitulo_rules'> 4) Fase de Movimiento</div>
                
                    <p className = 'texto_rules'>
                        Partiendo por el jugador inicial, cada jugador deberá activar un territorio que controle en el 
                        que posea una ficha de movimiento. El jugador deberá elegir un territorio adyacente que NO sea 
                        parte de su territorio y un número de tropas a mover. Luego de realizar el movimiento la ficha 
                        de movimiento se quita del tablero. Cada jugador activará un territorio por turno hasta 
                        que los jugadores no puedan seguir moviendo sus tropas. Los jugadores deberán obligatoriamente 
                        mover sus tropas si tienen la posibilidad. Sin embargo, solo se 
                        pueden activar aquellos territorios que posean al menos dos tropas en el. Además, el jugador deberá dejar 
                        obligatoriamente una tropa en el territorio desde el cual se realizó el movimiento. Sí un jugador no colocó 
                        fichas de movimiento en la fase de planificación, se le saltará durante esta fase de movimiento. Sí un 
                        jugador no puede activar más fichas de movimiento, se le saltará por el resto de esta fase. Cuando todos 
                        los jugadores sean saltados, la fase termina.
                    </p>

                    <p className='texto_rules'>
                        Dependiendo sí se realiza un movimiento a un territorio controlado o vacío ocurre lo siguiente:
                    </p>

                    <div className = 'punteo_rules'>

                        <p className = 'texto_punteo_rules'>
                            Movimiento a territorio vacío: Cuando se realiza un movimiento a un territorio vacío 
                            (territorio en el que no hay tropas de ningún jugador), el jugador decidirá cuántas tropas 
                            quiere mover y las trasladará al territorio de destino.
                        </p>

                    </div>

                    <div className='punteo_rules'>

                       <p className = 'texto_punteo_rules'>
                            Movimiento a territorio que controles: Sí se realiza un movimiento a un territorio que controles, 
                            las tropas que hayas movido se sumarán con las tropas que existan en aquel territorio. El límite máximo 
                            de tropas en un territorio es de 20. Si al finalizar un movimiento existen más de 20 tropas, se eliminarán 
                            hasta que queden 20.
                       </p>

                    </div>

                    <div className='punteo_rules'>

                       <p className = 'texto_punteo_rules'>
                            Movimiento a territorio controlado por un enemigo: En este caso se realiza un combate (ver Combate). 
                       </p>
                       
                    </div>

                    <p className = 'texto_rules'>
                        Al finalizar el movimiento, en cualquier caso, se descarta la ficha de movimiento y cualquier 
                        ficha que hubiese en el territorio al cual se movieron las tropas (incluyendo sí hubo un empate 
                        entre ambos ejércitos en un combate).
                    </p>
            </section>

            <section>
                <div className='subsubtitulo_rules'> 5) Fase de Victoria</div>
                
                    <p className = 'texto_rules'>
                    En esta fase se comprueba si solo existe un único jugador que controle 4 territorios celestes, 
                    4 territorios morados y 4 territorios naranja. En este caso aquel jugador será el ganador. 
                    Se debe tener en cuenta que si existen dos o más jugadores que cumplan esta condición, 
                    el juego debe continuar hasta que solo uno sea el ganador.
                    </p>
            </section>
  
        </>
    );
}

export default FasesJuego;