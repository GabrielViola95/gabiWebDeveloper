import React, { useState } from 'react';
import '../index.css';

const Navbar = ({handlerDarkStyle, darkStyle, closeDarkStyle}) => {
    const [click, setClick] = useState(false);

  const handlerClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  
  
  const navLink = document.querySelectorAll(`.nav__link`)


function linkAction(){
    navLink.forEach(n => n.classList.remove(`active`))
    this.classList.add(`active`)
}
navLink.forEach(n => n.addEventListener(`click`, linkAction))



  return (
    
        <header className="l-header">
        <nav className="nav bd-grid">
            <div>
                <a href="#home" className="nav__logo">Gabriel</a>
            </div>

            <div className={click ? "nav__menu show" : "nav__menu"} id="nav-menu">
                <ul className="nav__list" onClick={closeMobileMenu}>
                    <li className="nav__item"> <a href="#home" className="nav__link active">Home</a> </li>
                    <li className="nav__item"> <a href="#about" className="nav__link">Acerca de</a> </li>
                    <li className="nav__item"> <a href="#skills" className="nav__link">Habilidades</a> </li>
                    <li className="nav__item"> <a href="#work" className="nav__link">Proyectos</a> </li>
                    <li className="nav__item"> <a href="#contact" className="nav__link">Contacto</a> </li>
                     {/* Botón para cambiar modo  */}
                    <li><button onClick={handlerDarkStyle} className={darkStyle ? "switch nav__item  active-mode" : "switch nav__item"} id="switch" >
                        <span><i className='bx bx-sun' ></i></span>
                        <span><i className='bx bx-moon' ></i></span>
                    </button>
                    </li>
                </ul>
            </div>

            <div className="nav__toggle" id="nav-toggle">
                <i className={click ? 'bx bx-x' : 'bx bx-menu'} onClick={handlerClick}></i>
            </div>
        </nav>
        </header>
    
  )
}

export default Navbar