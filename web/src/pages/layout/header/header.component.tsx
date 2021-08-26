import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

export const Header = () => {
  return (
    <Fragment>
      <header>
        <div className="menu">
          <img
            className="imageHeader"
            alt="logo"
            src="/assets/r-i-r.jpeg"
            width={255}
            height={75}
          />
          <span>Início</span>
          <span>Bandas</span>
          <span>Shows</span>
          <Link href="/contact">Contato</Link>
        </div>
      </header>
    </Fragment>
  );
};
