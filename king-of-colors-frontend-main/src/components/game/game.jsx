import './../../assets/styles/game.css'
import tablero_lista from './tablero_lista.js'
import React, {createContext, useState, useEffect} from "react";
import axios from "axios";
import { HexGrid, Layout, Hexagon, GridGenerator} from 'react-hexgrid';
import Navbar from '../../common/Navbar';
import React, { useState } from 'react';

export const GameContext = createContext(null);

export default function Game(){
    const hexagons = GridGenerator.hexagon(3);
    const [tablero, setTablero] = useState(null);
    const [usuarios, setUsuarios] = useState([]);
    const [jugadores, setJugadores] = useState([]);
    const [partida, setPartida] = useState(null);
    const [tropas, setTropas] = useState(0); 
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

    //Inicializar usuarios
    useEffect(() => {
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/usuarios`, [{
        username: 'gato123',
        email: 'gato123@gmail.com',
        password: 'gatito123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'perro123',
        email: 'perro123@gmail.com',
        password: 'perrito123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'loro123',
        email: 'loro123@gmail.com',
        password: 'lorito123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ])
      .then((response) => { 
        const data = response.data;
        setUsuarios(data);
      })
      .catch((error) => {
        console.log(error);
      });
      }, [])

    //Crear una partida
    useEffect(() => {
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/partidas`, {
        admin_partida: 1,
        fase: 'planificacion',
        ganador: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      )
      .then((response) => { 
        const data = response.data;
        setPartida(data);
      })
      .catch((error) => {
        console.log(error);
      });
      }, [])

    //Asignar jugadores
    useEffect(() => {
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/jugadores`,
      usuarios.map((usuario) => 
      [{
        id_usuario: usuario.id,
        color: 'red',
        tropas: 0,
        producción_total: 0,
        id_partida: partida.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      }]
      )
      )
      .then((response) => { 
        const data = response.data;
        setJugadores(data);
      })
      .catch((error) => {
        console.log(error);
      });
      }, [])

    //Crear tablero
    useEffect(() => {
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/casillas`,
        tablero_lista
      )
      .then((response) => { 
        const data = response.data[0];
        setTablero(data.Casilla)
      })
      .catch((error) => {
        console.log(error);
      });
      }, [])
        
    
  return (
      <GameContext.Provider value={{ usuarios, jugadores, partida, tablero }}
      >
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
                <div className='squares' onClick={decrementarTropas}>-</div>
                <div className='numbertroop'>{tropas}</div>
                <div className='troop'></div>
                <div className='squares' onClick={incrementarTropas}>+</div>
              </div>
              <button className="button">Mover</button>
            </div>
          </div>
          <div className='cols'>
              <div className='round' >Ronda 1 - Fase de Planificación</div>
              <div className="board">
                <HexGrid width={705} height={705}>
                  <Layout size={{ x: 7, y: 7 }} >
                    { hexagons.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />) }
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
        </div>
      </GameContext.Provider>
  )
}