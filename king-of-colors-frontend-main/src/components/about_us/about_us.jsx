import React from "react";
import '../../assets/styles/about_us.css';
import Integrantes from "./integrantes";
import Navbar from '../../common/Navbar'

function AboutUs() {
    return (
        <>
        <div>
            <Navbar/>  
        </div>

        <div>
            <section className = "titulo_about_us">Sobre nosotros</section>
        </div>

        <div>
            <Integrantes />
        </div>
        </>
    )
}

export default AboutUs