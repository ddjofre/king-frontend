import React from 'react';
import inicio_juego_img from '../../assets/imgs/inicio_de_juego.png';

function InicioJuego() {
    return(
        <>
            <div className = 'subtitulo_rules'>Inicio de Partida</div>

            <section className="grilla_rules">

                <div>
                    <p className = 'texto_grilla_rules'>
                        A cada jugador se le asigna un color aleatorio (entre rojo, verde y azul), 3 territorios y 5 tropas en 
                        cada uno de estos territorios. Luego, a cada territorio (exceptuando los territorios iniciales de cada 
                        jugador y el territorio del centro del tablero) se le asignará un color aleatorio (entre celeste, morado 
                        y naranja) de manera que siempre existan 9 de cada color en el tablero. Los territorios iniciales de cada 
                        jugador están a una distancia equitativa entre sí y siempre estarán en la disposición mostrada en la 
                        figura de la derecha.
                    </p>
                </div>

                <div> 
                    <img className='img_rules' src={inicio_juego_img} alt="Inicio de Juego" />
                </div>
            
            </section>

            <section>
                <p className = 'texto_rules'>
                    Al empezar el juego se define aleatoriamente el jugador que comenzará durante esta ronda, el cual se 
                    conocerá como jugador inicial. El jugador a la izquierda del jugador inicial se le conoce como segundo 
                    jugador, y al jugador a la derecha del jugador inicial se le conoce como tercer jugador. Los títulos de 
                    jugador inicial, segundo jugador y tercer jugador se cambiarán al comienzo de cada ronda en sentido 
                    horario. Es decir que quien fuese el segundo jugador en la ronda anterior, será el jugador inicial en 
                    esta ronda. En el ejemplo de la Figura 1, el juego decide aleatoriamente que el jugador rojo es el 
                    jugador inicial en la primera ronda. En consecuencia, el segundo jugador es el azul y el tercer jugador 
                    es el jugador verde. En la ronda siguiente, el jugador inicial pasaría a ser el jugador azul, el segundo 
                    jugador sería el verde y el tercer jugador sería el rojo.
                </p>
            </section>
        </>
    );
}

export default InicioJuego;