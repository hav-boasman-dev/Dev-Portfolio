import React from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

const MapSection = () => {
  const position = { lat: -37.857417135603615, lng: 144.69503409566068 };
  const marker1 = { lat: -38.149271955995204, lng: 144.37914941880175 };
  const marker2 = { lat: -37.808673109693544, lng: 144.96432893467542 };
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <APIProvider apiKey='AIzaSyCx98AAo0IItiEE-NFH-txxyFMoQwAFilU'>
        <Map
          defaultCenter={position}
          defaultZoom={9}
          colorScheme='DARK'
          disableDefaultUI='true'
          mapId='JOB_MAP' // Required for Advanced Markers
        >
          <AdvancedMarker position={marker1} />
          <AdvancedMarker position={marker2} />
        </Map>
      </APIProvider>
    </div>
  );
};

export default MapSection;
