import React from "react";
import { images } from "./images";
import "../css/work.css";

const Work = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          className="gallery__item"
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default Work;