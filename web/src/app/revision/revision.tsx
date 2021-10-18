import { Fragment } from "react";
import Image from "next/image";

export const Revision = () => {
  return (
    <Fragment>
      <div className="revision">
        <Image
          src="/assets/bands/guns.jpeg"
          width={250}
          height={250}
          className="image"
        />
        <Image
          src="/assets/bands/guns.jpeg"
          width={250}
          height={250}
          className="image2"
        />
        <Image
          src="/assets/bands/guns.jpeg"
          width={250}
          height={250}
          className="image3"
        />
        <div className="cardRevision">
          <div className="name">
            <h1>Thaísa</h1>
            <h2>Castro</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
