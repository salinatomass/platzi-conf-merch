import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const containerStyle = {
    width: '100%',
    height: '50vh',
  };

  const defaultCenter = {
    lat: -3.745,
    lng: -38.523,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDOD9jVfSKbBushC00mMl9EGbGUllsHdV8">
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={10}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
