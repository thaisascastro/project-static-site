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
            isRTL={false}
            showArrows={false}
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
            <img height={500} width={500} src="/assets/bands/bon-jovi.jpg" />
            <img height={500} width={500} src="/assets/bands/guns.jpeg" />
            <img height={500} width={500} src="/assets/bands/iron.jpeg" />
            <img height={500} width={500} src="/assets/bands/metallica.jpeg" />
            <img height={500} width={500} src="/assets/bands/pink-floyd.jpeg" />
            <img height={500} width={500} src="/assets/bands/rolling.jpeg" />
            <img height={500} width={500} src="/assets/bands/SOAD.jpeg" />
          </Carousel>
          {/* <Carousel responsive={{}}>
              <img
                height={500}
                width={500}
                src="/assets/bands/aerosmith.jpeg"
              />
              <img height={500} width={500} src="/assets/bands/bon-jovi.jpg" />
              <img height={500} width={500} src="/assets/bands/guns.jpeg" />
              <img height={500} width={500} src="/assets/bands/iron.jpeg" />
              <img
                height={500}
                width={500}
                src="/assets/bands/metallica.jpeg"
              />
              <img
                height={500}
                width={500}
                src="/assets/bands/pink-floyd.jpeg"
              />
              <img height={500} width={500} src="/assets/bands/rolling.jpeg" />
              <img height={500} width={500} src="/assets/bands/SOAD.jpeg" />
            </Carousel> */}
        </div>
      </div>
    </Fragment>
  );
};
