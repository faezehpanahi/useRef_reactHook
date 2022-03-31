import React, { useContext, useRef } from "react";
// import contextAPI from './contextAPI';

const ImageToggle = ({ primery, secondery }) => {
  // const context = useContext(contextAPI)

  const imageRef = useRef(null);

  return (
    <div>
      <img
        src={secondery}
        alt="image"
        ref={imageRef}
        onMouseOver={() => {
          imageRef.current.src = primery;
        }}
        onMouseOut={() => {
          imageRef.current.src = secondery;
        }}
      />
    </div>
  );
};

export default ImageToggle;
