import Image from "next/image";
import * as React from "react";
import { useState, useCallback } from "react";
import { render } from "react-dom";
import MapGL from "react-map-gl";
import { Marker } from "react-map-gl";

import ControlPanel from "./control-panel";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic29oYW4wMDciLCJhIjoiY2tuYnV5eDBkMXU0dDJwcWQwYzRqeHJqaCJ9.puau6F85ZNVS2M67Pql9CA"; // Set your mapbox token here

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 23.810359857215136,
    longitude: 90.36791760654015,
    zoom: 15,
    pitch: 50,
  });
  const [interactionState, setInteractionState] = useState({});

  return (
    <>
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        onInteractionStateChange={(s) => setInteractionState({ ...s })}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Marker
          latitude={23.810359857215136}
          longitude={90.36791760654015}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Image
            width="50%"
            height="50%"
            src="https://romex.s3.ap-south-1.amazonaws.com/cosmetica/%E2%80%94Pngtree%E2%80%94marker+flat+multi+color+icon_3777246.png"
          />
        </Marker>
      </MapGL>
    </>
  );
}
