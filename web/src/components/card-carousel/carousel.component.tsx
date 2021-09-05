import React, { Fragment, useRef } from "react";

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-elastic-carousel";
import Image from "next/image";

export const CardCarousel = () => {
  const itemsPerPage = 3;

  const carouselRef = useRef(null);

  let resetTimeout: NodeJS.Timeout;
  return (
    <Fragment>
      <div className="cardCarousel">
        <span className="title">Shows Previstos</span>
        <div className="carousel">
          <Carousel
            renderPagination={({ pages }) => {
              return (
                <div>
                  {pages.map((page) => {
                    return <div></div>;
                  })}
                </div>
              );
            }}
            className="rec-carousel"
            itemsToShow={itemsPerPage}
            focusOnSelect={true}
            enableAutoPlay
            isRTL={true}
            showArrows={true}
            enableSwipe={true}
            ref={carouselRef}
            autoPlaySpeed={2000}
            onNextEnd={({ index }) => {
              clearTimeout(resetTimeout);
              console.log(index);
              if (index === 6) {
                // @ts-ignore
                carouselRef.current.goTo(0);
              }
            }}
          >
            <img height={400} width={470} src="/assets/bands/bon-jovi.jpg" />
            <img height={400} width={450} src="/assets/bands/guns.jpeg" />
            <img height={400} width={430} src="/assets/bands/iron.jpeg" />
            <img height={400} width={470} src="/assets/bands/metallica.jpeg" />
            <img height={400} width={470} src="/assets/bands/pink-floyd.jpeg" />
            <img height={400} width={470} src="/assets/bands/rolling.jpeg" />
            <img height={400} width={470} src="/assets/bands/SOAD.jpeg" />
          </Carousel>
        </div>
        <div className="promo">
          <span>Venha fazer parte disto!</span>
        </div>
        <div className="days">
          <a href="/contact">
            <div>
              <span style={{ marginRight: 15 }}>SOAD</span>
              {/* <ul>2 de Setembro</ul> */}
            </div>
            <div>
              <span style={{ marginRight: 15 }}>Rolling Stones</span>
              {/* <ul>3 de Setembro</ul> */}
            </div>
            <div>
              <span>Roger Waters</span>
              {/* <ul>4 de Setembro</ul> */}
            </div>
            <div>
              <span style={{ marginLeft: 15 }}>Metallica</span>
              {/* <ul>8 de Setembro</ul> */}
            </div>
            <div>
              <span style={{ marginLeft: 15 }}>Iron Maiden</span>
              {/* <ul>9 de Setembro</ul> */}
            </div>
            <div>
              <span style={{ marginLeft: 25 }}>Guns N' Roses</span>
              {/* <ul>10 de Setembro</ul> */}
            </div>
          </a>
        </div>
      </div>
    </Fragment>
  );
};
