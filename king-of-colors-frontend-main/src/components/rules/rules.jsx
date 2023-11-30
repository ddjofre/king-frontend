import React from 'react';
import '../../assets/styles/rules.css';
import InicioJuego from './inicio_juego';
import FasesJuego from './fases_juego';
import Combate from './combate';
import FichaAccion from './ficha_accion';
import CartaEvento from './cartas_evento';
import Glosario from './glosario';
import Navbar from '../../common/Navbar';

function Rules() {
    return (
        <>
        <Navbar/>

            <section>
            <div className = 'titulo_rules'>Reglas de juego</div>
                <p className = 'texto_rules'>
                    El objetivo del juego es controlar 4 territorios celestes, 4 territorios morados y 4 territorios naranjas. 
                    Lo anterior, se hará por medio de rondas (de cantidad indefinida), las que, a su vez, están subdivididas 
                    en cinco fases: Fase de Producción, Fase de Evento, Fase de Movimiento, Fase de Planificación y Fase de 
                    Victoria. El juego concluirá hasta que un único jugador dentro de la Fase de Victoria cumpla con las 
                    condiciones de victoria, el cual será el ganador.
                </p>
            </section>

            <section>
                <InicioJuego />
            </section>
            
            <section>
                <FasesJuego />
            </section>

            <section>
                <Combate />
            </section>

            <section>
                <FichaAccion />
            </section>

            <section>
                <CartaEvento />
            </section>

            <section>
                <Glosario />
            </section>

        </>
    );
}

export default Rules;