import React, { useEffect, useRef } from "react";
import Image from "./Image";
const ImageBox = () => {
  const imageRef = useRef();
  return (
    <div className="d-flex w-100">
      <div className="d-flex justify-content-center align-items-center w-25 p-5">
        <Image ref={imageRef} />
      </div>
      <div className="d-flex flex-column g-5">
        <button
          onClick={() => {
            imageRef.current.ZoomIn();
          }}
        >
          Zoom in
        </button>
        <button
          onClick={() => {
            imageRef.current.ZoomOut();
          }}
        >
          Zoom out
        </button>
      </div>
    </div>
  );
};

export default ImageBox;
