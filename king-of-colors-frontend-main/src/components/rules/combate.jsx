import React from 'react';
import '../../assets/styles/rules.css';

function Combate() {
    return(
        <>
            <div className = 'subtitulo_rules'>Combate</div>

            <section>
                <p className = 'texto_rules'>
                    Cuando un jugador mueve sus tropas hacia un territorio controlado por otro jugador, se inicia un 
                    combate. El ejército del jugador que realiza el movimiento se le conoce como ejército atacante. 
                    El ejército del jugador que resulta atacado se le conoce como ejército defensor. Se debe considerar 
                    que el poder total de un ejército es igual a la cantidad de tropas en este. Por ejemplo, sí hay 12 
                    ejércitos en un territorio que controle el jugador azul, significa que su poder será de 12 puntos.
                </p>
            </section>

            <section>
                <p className = 'texto_rules'>
                    El combate tiene sus propias fases que se siguen el siguiente orden:
                </p>
            </section>

            <section>
                <div className='subsubtitulo_rules'> 1) Fase de Defensa</div>
                
                <p className = 'texto_rules'>
                    Se verifica sí existe una ficha de defensa en el territorio del ejército defensor. En el caso de que 
                    exista, el ejército atacante pierde 3 tropas inmediatamente, y se descarta la ficha de defensa. Sí no 
                    existe ficha de defensa, esta fase se omite. 
                </p>
            </section>

            <section>
                <div className='subsubtitulo_rules'> 2) Fase de Comparación</div>
                
                <p className = 'texto_rules'>
                    Se compara el poder total del ejército atacante con el del ejército defensor. Dependiendo del poder 
                    total de cada uno de los ejércitos puede ocurrir lo siguiente: 
                </p>

                <div className = 'punteo_rules'>

                    <p className = 'texto_punteo_rules'>
                        Ambos ejércitos con el mismo poder: En este caso ambos ejércitos son derrotados. Esto significa 
                        que ambos pierden todas las tropas que tenían en sus respectivos territorios.
                    </p>

                </div>

                <div className='punteo_rules'>

                    <p className = 'texto_punteo_rules'>
                        Ejércitos con poder distinto: El ejército con mayor poder resulta victorioso y el con menor poder es derrotado.
                    </p>

                </div>
            </section>

            <section>
                <div className='subsubtitulo_rules'> 3) Fase de Resolución</div>
                
                <p className = 'texto_rules'>
                    Los ejércitos se harán daño entre sí y deberán eliminar una cantidad de tropas igual al poder del 
                    ejército con menor poder. Solo si el ejército victorioso resulta ser el ejército atacante, este 
                    deberá realizar un movimiento hacia el territorio del ejército derrotado. El movimiento se ejecuta 
                    de igual manera que el descrito en la Fase de Movimiento. Si no se puede realizar el movimiento, el 
                    territorio que ocupaba el ejército perdedor quedará vacío.
                </p>
            </section>

        </>
    );
}

export default Combate;