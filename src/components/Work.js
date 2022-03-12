import React from 'react';
import video1 from "../video/video__pagina-calculadora.mp4";
import video2 from "../video/video__pagina-medicina.mp4";
import video3 from "../video/video__pagina-canvas.mp4";
import video4 from "../video/video__pagina-chat-celulares.mp4";
import video5 from "../video/video5.mp4";
import video6 from "../video/video6.mp4";
import video7 from "../video/video7.mp4";
import video8 from "../video/video8.mp4";
import video9 from "../video/video9.mp4";

const Work = () => {

    

  return (
    <section className="work section" id="work">
            <h2 className="section-title">Proyectos</h2>

            <div className="work__container bd-grid">
            <div className="work__img">
                    <a href="https://github.com/GabrielViola95" target="_blank">
                        <video src={video9} className="video" onMouseOver={(e) => e.target.play()}
                        onMouseOut={(e) => e.target.pause()} ></video>
                    </a>
                </div>
                <div className="work__img">
                    <a href="https://github.com/GabrielViola95" target="_blank">
                        <video src={video8} className="video" onMouseOver={(e) => e.target.play()}
                        onMouseOut={(e) => e.target.pause()} ></video>
                    </a>
                </div>
                <div className="work__img">
                    <a href="https://github.com/GabrielViola95/gabiWebDeveloper" target="_blank">
                        <video src={video7} className="video" onMouseOver={(e) => e.target.play()}
                        onMouseOut={(e) => e.target.pause()} ></video>
                    </a>
                </div>
                <div className="work__img">
                    <a href="https://github.com/GabrielViola95" target="_blank">
                        <video src={video6} className="video" onMouseOver={(e) => e.target.play()}
                        onMouseOut={(e) => e.target.pause()} ></video>
                    </a>
                </div>
                <div className="work__img">
                    <a href="https://github.com/GabrielViola95" target="_blank">
                        <video id="video5" src={video5} className="video" onMouseOver={(e) => e.target.play()}
                        onMouseOut={(e) => e.target.pause()} ></video>
                    </a>
                </div>
                <div className="work__img">
                    <a href="https://github.com/GabrielViola95/calculadora" target="_blank">
                        <video id="video1" src={video1} className="video" onMouseOver={(e) => e.target.play()}
                        onMouseOut={(e) => e.target.pause()}></video>
                    </a>
                </div>
                <div className="work__img">
                    <a href="https://github.com/GabrielViola95/BajadadeMedicina" target="_blank">
                        <video id="video2" src={video2} onMouseOver={(e) => e.target.play()}
                        onMouseOut={(e) => e.target.pause()}></video>
                    </a>
                </div>
                <div className="work__img">
                    <a href="#" target="_blank">
                        <video id="video3" src={video3} onMouseOver={(e) => e.target.play()}
                        onMouseOut={(e) => e.target.pause()}></video>
                    </a>
                </div>
                <div  className="work__img">
                    <a target="_blank" href="https://github.com/GabrielViola95/chat-simulator">
                        <video id="video4" src={video4} onMouseOver={(e) => e.target.play()}
                        onMouseOut={(e) => e.target.pause()}></video>
                    </a>
                </div>
            </div>
        </section>
  )
}

export default Work
