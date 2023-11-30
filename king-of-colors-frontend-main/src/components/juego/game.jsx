import './../../assets/styles/game.css';
import React, {createContext, useState, useEffect} from "react";
import axios from "axios";
import { HexGrid, Layout, Hexagon, GridGenerator} from 'react-hexgrid';
import Navbar from '../../common/Navbar.jsx';
import RectanguloTropas from './tropas.jsx';

export const GameContext = createContext(null);

export default function Game({ playing }){
    
    const [tablero, setTablero] = useState(null);
    const [usuarios, setUsuarios] = useState(null);
    const [jugadores, setJugadores] = useState(null);
    const [partida, setPartida] = useState(null);
    const [tropas, setTropas] = useState(0); 
    const [selectedHex, setSelectedHex] = useState(null);
    const [hexagons, setHexagons] = useState([]);
    const [coloresBackend, setColoresBackend] = useState([]);

    const incrementarTropas = () => {
      if (tropas < 20) {
        setTropas(tropas + 1);
      }
    };
    const decrementarTropas = () => {
      if (tropas > 0) {
        setTropas(tropas - 1);
      }
    };  
    
    const openPopup = () => {
      if (selectedHex) {
        const popupContent = `
          <div>
            <p>Coordenadas:</p>
            <p>q: ${selectedHex.q}</p>
            <p>r: ${selectedHex.r}</p>
            <p>s: ${selectedHex.s}</p>
          </div>
        `;
        
        const popupWindow = window.open("", "Coordenadas", "width=300,height=200");
        popupWindow.document.write(popupContent);
        
        setTimeout(() => {
          popupWindow.close();
        }, 5000);
      } else {
        alert("Selecciona un hexágono haciendo clic en él.");
      }
    };

    const getColorForHex = (hex) => {
      const colorInfo = coloresBackend.find(
        (colorObj) => colorObj.q === hex.q && colorObj.r === hex.r && colorObj.s === hex.s
      );
      
      return colorInfo ? `hexagon-${colorInfo.color}` : 'defaultColor';
    };

    const getNumeroForHex = (hex) => {
      const numeroInfo = coloresBackend.find(
        (colorObj) => colorObj.q === hex.q && colorObj.r === hex.r && colorObj.s === hex.s
      );
      
      return numeroInfo ? numeroInfo.valor_produccion : 'defaultValorProduccion';
    };

  // Crear tablero

  useState(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/tablero_lista/tablero_lista`, { responseType: 'json' });
        console.log('API Response:', response.data);
        if (Array.isArray(response.data)) {
          setColoresBackend(response.data);
        } else {
          console.error('La respuesta de la API no tiene un array "tablero_lista":', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useState(() => {
    setHexagons(GridGenerator.hexagon(3));
  }, []);

  // Ver si estamos en fase movimiento

    
  return (
      <GameContext.Provider value={{ usuarios, jugadores, partida, tablero }}>

        <div className='body_game'>

          <div className='main'>
            <Navbar></Navbar>

            <div className='cols'>

              <div className='tokens'>
                <p>Fichas de Acción</p>
                <br />
                <p><span className="dot">M</span> Movimiento</p>
                <p><span className="dot">D</span> Defensa</p>
                <p><span className="dot">P</span> Producción</p>
                <br />
                <br />
                <button className="button">Deshacer</button>
              </div>

              <div className='move'>
                <p>Mover Tropas</p>
                <br />

                <div className='troopslay'>
                  <div className='squares' onClick={decrementarTropas} style={{ cursor: 'pointer' }}>-</div>
                  <div className='numbertroop'>{tropas}</div>
                  <div className='troop'></div>
                  <div className='squares' onClick={incrementarTropas} style={{ cursor: 'pointer' }}>+</div>
                </div>

                <button className="button">Mover</button>

              </div>

            </div>

            <div className='cols'>

                <div className='round' >Ronda 1 - Fase de Planificación</div>

                <div className="board">

                  <HexGrid width={705} height={705}>
                    <Layout size={{ x: 7, y: 7 }}>
                      {hexagons.map((hex, i) => {
                        const color = getColorForHex(hex);
                        const numero = getNumeroForHex(hex);

                        return (
                          <Hexagon
                            key={i}
                            q={hex.q}
                            r={hex.r}
                            s={hex.s}
                            className={color}
                            stroke='black'
                            strokeWidth={0.2}
                            onClick={() => setSelectedHex(hex)}
                          >
                            <text x="-3.5px" y="-4px" className='texto_hexagono'>
                              {numero}
                            </text>
                            
                            
                          </Hexagon>
                        );
                      })}
                    </Layout>
                  </HexGrid>

                </div>

            </div>

            <div className='cols'>

              <div className='time'>4:59</div>

              <div className='turn'><p>Orden de Turno</p>

              <p>1.- Jugador Rojo (Tú)</p>
              <p>2.- Jugador Azul</p>
              <p>3.- Jugador Verde</p>

              <p>Turno Actual: Jugador Rojo </p></div>

              <div className='event'><p>Megaproducción</p>

              <p>Las fichas de producción triplican los niveles de producción en vez de duplicarlos</p></div>

            </div>

          </div>

          <div className="selected-hex-info">
            <button onClick={openPopup}>Mostrar Coordenadas en Popup</button>
          </div>
        </div>
      </GameContext.Provider>
  )
}