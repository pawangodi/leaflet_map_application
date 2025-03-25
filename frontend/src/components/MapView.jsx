import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { AuthContext } from '../context/AuthContext';
import { getMapData } from '../api/api';
import Navbar from './Navbar';

const MapView = () => {
  const { id } = useParams();
  const { token, logout } = useContext(AuthContext);
  const [mapData, setMapData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        const response = await getMapData(token, id);
        setMapData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load map data');
      }
    };
    fetchMapData();
  }, [id, token]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!mapData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading Map...</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar logout={logout} />
      <div className="h-screen">
        <MapContainer
          center={[mapData.latitude, mapData.longitude]}
          zoom={mapData.zoom}
          className="h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <Marker position={[mapData.latitude, mapData.longitude]}>
            <Popup>You are here!</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView;
