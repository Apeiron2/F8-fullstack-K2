import React, { forwardRef, useImperativeHandle, useRef } from "react";

function Image(props, ref) {
  const imageRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      ZoomIn: () => {
        console.log("ZoomIn");
      },
      ZoomOut: () => {
        console.log("ZoomOut");
      },
    };
  });
  return (
    <div>
      <img ref={imageRef} src="https://picsum.photos/200/300" alt="" />
    </div>
  );
}

export default forwardRef(Image);
