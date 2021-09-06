import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { SearchOutlined } from "@ant-design/icons";

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
          <a href="/search">
            <img alt="search" src="/assets/search.png" width={50} height={50} />
          </a>
        </div>
      </header>
    </Fragment>
  );
};
