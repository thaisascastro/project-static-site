import Link from "next/link";
import React, { Fragment } from "react";

export const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className="card1">
          <span>Blog</span>
          <span>Contato</span>
          <span>Termos de Uso</span>
          <span>Trabalhe Conosco</span>
        </div>

        <div className="card2">
          <span>Preferências</span>
          <span>Sugestões</span>
          <span>Idiomas</span>
          <div className="photoFooter">
            <img
              className="imageHeader"
              alt="logo"
              src="/assets/brazil.jpeg"
              width={30}
              height={25}
            />
            <img
              className="imageHeader"
              alt="logo"
              src="/assets/eua.png"
              width={30}
              height={25}
            />
            <img
              className="imageHeader"
              alt="logo"
              src="/assets/portugal.png"
              width={30}
              height={25}
            />
            <img
              className="imageHeader"
              alt="logo"
              src="/assets/espanha.png"
              width={30}
              height={25}
            />
          </div>
        </div>
        <div className="card3">
          <span>Conte para nós sua experiência</span>
          <span>Venha fazer parte!</span>
          <span>Fale Conosco</span>
          <span>Alguma dúvida?</span>
        </div>
        <div className="card4">
          <span>Redes sociais</span>
          <div className="photoFooter">
            <img
              className="imageHeader"
              alt="logo"
              src="/assets/instagram.svg"
              width={30}
              height={25}
            />
            <img
              className="imageHeader"
              alt="logo"
              src="/assets/facebook.svg"
              width={30}
              height={25}
            />
            <img
              className="imageHeader"
              alt="logo"
              src="/assets/whatsapp.svg"
              width={30}
              height={25}
            />
            <img
              className="imageHeader"
              alt="logo"
              src="/assets/twitter.png"
              width={30}
              height={25}
            />
          </div>
        </div>
      </footer>
      <div className="reservations">
        <span>2021 - Todos os direitos reservados Rock In Rio</span>
      </div>
    </Fragment>
  );
};
