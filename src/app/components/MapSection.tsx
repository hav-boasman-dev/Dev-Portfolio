import React from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

const MapSection = () => {
  const position = { lat: -37.857417135603615, lng: 144.69503409566068 };
  const marker1 = { lat: -38.149271955995204, lng: 144.37914941880175 };
  const marker2 = { lat: -37.808673109693544, lng: 144.96432893467542 };
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
      className='flex justify-center opacity-80 brightness-90 contrast-125 grayscale-90 hue-rotate-160 invert'
    >
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d341787.77216742735!2d144.7115856376622!3d-37.976720727820165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1777232469953!5m2!1sen!2sau'
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        width='100%'
        height='100%'
      ></iframe>
    </div>
  );
};

export default MapSection;
