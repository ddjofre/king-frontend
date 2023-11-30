import { HexGrid, Layout, Hexagon, GridGenerator} from 'react-hexgrid';
import React, {createContext, useState, useEffect} from "react";
import axios from "axios";

export default function Board(){
    const hexagons = GridGenerator.hexagon(3);
    return (
        <div className="board">
        <HexGrid width={705} height={705}>
            <Layout size={{ x: 7, y: 7 }} >
            { hexagons.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />) }
            </Layout>
        </HexGrid>
        </div>
    )
  }