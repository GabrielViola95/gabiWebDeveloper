import React, { useState, useEffect } from 'react';
import './index.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import scrollreveal from "scrollreveal";

function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        #home,
        #about,
        #skills,
        #work,
        #contact
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  const [darkStyle, setDarkStyle] = useState(false);
  const handlerDarkStyle = () => setDarkStyle(!darkStyle);

  return (
    <body className={darkStyle ? 'dark' : ''}>
      <Navbar handlerDarkStyle={handlerDarkStyle} darkStyle={darkStyle}  />
        <Home darkStyle={darkStyle} />
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
      <Footer/>
    </body>
  );
}

export default App;
