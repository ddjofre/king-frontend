// App.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Game from './../components/juego/game.jsx';
import Navbar from './Navbar';
import './App.css';

function App() {
  const [playing, setPlaying] = useState(false);

  const handlePlayClick = () => {
    setPlaying(true);
  };

  return (
    <>
      <Navbar />
      <div className="background_app">
        {!playing ? (
          <>
            <div className="body_app">
              <p className="textito_app">
                Prepárate para convertirte en el Rey Supremo del Reino de Colores
              </p>
            </div>

            <div className="body_app">
              <p className="texto_app"> Crea un ejército</p>
            </div>

            <div className="body_app">
              <p className="texto_app">Traiciona a tus amigos</p>
            </div>

            <div className="body_app">
              <p className="texto_app">Conquista sus territorios</p>
            </div>

            <div className="body_app">
              <div className="buttoncontainer_app">
                <div className="button_app">
                  {/* Utiliza Link para navegar a la ruta /game */}
                  <Link to="/game" className="button_app" onClick={handlePlayClick}>
                    Jugar
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Renderizar Game solo cuando playing es true
          <Game playing= {playing} />
        )}
      </div>
    </>
  );
}

export default App;
