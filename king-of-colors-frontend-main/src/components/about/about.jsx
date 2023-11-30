import Navbar from '../../common/Navbar'
import '../../assets/styles/about.css'
import React from "react";


function About() {
        
    return (
        <>
        <Navbar/>   
  
           <div className='background_about'>

                <div className='titulo_about'>Sobre King Of Colors</div>

                <div className='cuerpo_about'>
                    <p className='texto_about'> 
                        King of Colors es un juego de estrategia donde deberás ser el más listo para conquistar 4 territorios de cada color para volverte "El Rey Supremo de los colores".
                    </p>
                </div>
            
                <div className='cuerpo_about'>
                    <p className='texto_about'> 
                        Actualmente se encuentra en su primera versión, en la que puedrás ver las vistas preliminares del juego, conocer sus reglas y ver de que trata el juego en más profundidad.
                    </p>
                </div>

                <div className='cuerpo_about'>
                    <img className = 'imagen_about' src={'https://juegos-gratis.org/wp-content/uploads/2015/10/Bajar-Reinos-Preguntados-para-Android-preguntas-y-respuestas.png'}/>
                </div>

            </div>
           
        </>
    )
}

export default About