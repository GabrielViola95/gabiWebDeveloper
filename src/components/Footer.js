import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <p className="footer__title">Gabriel Viola</p>

        <div className="footer__social">
            <a href="https://www.facebook.com/gabriel.baroni.581/" target="_blank" className="footer__icon"><i className='bx bxl-facebook' ></i></a>
            <a href="https://www.instagram.com/gabrieljesusviola/" target="_blank" className="footer__icon"><i className='bx bxl-instagram' ></i></a>
        </div>
        <p>&#169; 2021 copyright all right reserved</p>
    </footer>
  )
}

export default Footer