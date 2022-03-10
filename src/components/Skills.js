import React from 'react';
import work3 from "../img/work3.jpg";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
            <h2 className="section-title">Habilidades</h2>

            <div className="skills__container bd-grid">
                <div>
                    <h2 className="skills__subtitle">Habilidades Profesionales</h2>
                    <p className="skills__text">Me considero un react developper, uso principalmente React para el desarrollo web y dependiendo el proyecto me complemento con una buena variedad tanto de frameworks como de la suit de Adobe.</p>
                    {/* html  */}
                    <div className="skills__data">
                        <i className='bx bxl-html5 skills__icon'></i>
                        <div className="skills__names">
                            <span className="skills__name">HTML5</span>
                        </div>
                        <div>
                            <span className="skills__percentage">95%</span>
                        </div>
                        <div className="skills__bar skills__html"></div>
                    </div>
                    {/*  css  */}
                    <div className="skills__data">
                        <i className='bx bxl-css3 skills__icon' ></i>
                        <div className="skills__names">
                            <span className="skills__name">CSS3</span>
                        </div>
                        <div>
                            <span className="skills__percentage">95%</span>
                        </div>
                        <div className="skills__bar skills__css"></div>
                    </div>
                    {/*  JavaScript  */}
                    <div className="skills__data">
                        <i className='bx bxl-javascript  skills__icon' ></i>
                        <div className="skills__names">
                            <span className="skills__name">JavaScript</span>
                        </div>
                        <div>
                            <span className="skills__percentage">80%</span>
                        </div>
                        <div className="skills__bar skills__js"></div>
                    </div>
                    {/* react  */}
                    <div className="skills__data">
                    <i class='bx bxl-react skills__icon'></i>
                        <div className="skills__names">
                            <span className="skills__name">React</span>
                        </div>
                        <div>
                            <span className="skills__percentage">60%</span>
                        </div>
                        <div className="skills__bar skills__react"></div>
                    </div>
                     {/* Nodejs  */}
                    <div className="skills__data">
                        <i className='bx bxl-nodejs skills__icon' ></i>
                        <div className="skills__names">
                            <span className="skills__name">Node js</span>
                        </div>
                        <div>
                            <span className="skills__percentage">10%</span>
                        </div>
                        <div className="skills__bar skills__node"></div>
                    </div>
                     
                </div>


                <div>
                    <img src={work3} className="skills__img" />
                </div>
            </div>
        </section>
  )
}

export default Skills;