import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Map.css';

const MapComponent = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={10} // Zoom initial
    defaultCenter={{ lat: 37.7749, lng: -122.4194 }} // Coordonnées géographiques initiales (San Francisco)
  >
    <Marker
      position={{ lat: 37.7749, lng: -122.4194 }} // Coordonnées du marqueur
      title="Mon emplacement" // Titre du marqueur
    />
  </GoogleMap>
));

const Map = () => {
  return (
    <div className="map-container">
      <MapComponent
        containerElement={<div style={{ height: '100%', width: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
};

export default Map;
