import React from 'react';
import about from "../img/about.png";

const About = () => {
  return (
    <section className="about section" id="about">
            <h2 className="section-title">Acerca de</h2>

            <div className="about__container bd-grid">
                <div className="about__img">
                    <img src={about} alt="about" />
                </div>
                <div>
                    <h2 className="about__subtitle">Yo soy Gabriel</h2>
                    <p className="about__text">Soy Lic. en Producción Audiovisual, Psicólogo y entusiasta del mundo de la programación. Me interesa especialmente el desarrollo web y actualmente me desempeño como Front-end Developer usando fundamentalmente React. También poseo conocimientos de diseño y cuento con varios años de experiencia con toda la suit de Adobe.</p>
                </div>
            </div>
    </section>
  )
}

export default About