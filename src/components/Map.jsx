import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const containerStyle = {
    width: '100%',
    height: '50vh',
  };

  console.log(data);

  const defaultCenter = {
    lat: data.latitude,
    lng: data.longitude,
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
