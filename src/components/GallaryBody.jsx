import React from "react";
import GallaryImage from "./GallaryImage";

export default function () {
  const imageData = GallaryImage();
  return (
    <div>
      {imageData.map((image) => {
        return (
          <div key={image.id} className="column">
            <img src={image.img} alt=""></img>
          </div>
        );
      })}
    </div>
  );
}
