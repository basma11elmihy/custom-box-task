"usse client";

import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import markerIc from "../../../public/assets/marker-ic.svg";

const containerStyle = {
  width: "100%",
  height: "360px",
  marginTop: "55px",
  borderRadius: "4px",
  zIndex: "100"
};

const center = {
  lat: 43.761144,
  lng: -79.4661068,
};

const Map = ({ apiKey }) => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <MarkerF
          position={center}
          icon={markerIc}
          draggable={true}
          onClick={() => alert("Marker clicked!")}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
