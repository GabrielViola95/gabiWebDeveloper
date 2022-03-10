import React from 'react';
import '../index.css';
import perfildia from "../img/perfildia.png";
import perfilnoche from "../img/perfilnoche.png";

const Home = ({darkStyle}) => {
    
  return (
      
        <section className="home bd-grid" id="home">
            <div className="home__data">
                <h1 className="home__title">Hola, soy <span className="home__title-color"> Gabriel,</span> <br></br>      &nbsp; desarrollador Web</h1>
                <a href="#contact" className="button">Contacto</a>
            </div>

            <div className="home__social">
                <a href="https://www.linkedin.com/in/gabriel-jesus-viola/" target="_blank" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
                <a href="https://github.com/GabrielViola95" target="_blank" className="home__social-icon"><i className='bx bxl-github'></i></a>
            </div>

            <div className="home__img">
                <img src={darkStyle ? perfilnoche : perfildia} alt="perfil" />
            </div>
        </section>
    
  )
}

export default Home