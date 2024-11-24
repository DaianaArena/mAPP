import React, { useRef, useEffect } from 'react';
import maplibregl, { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

interface MapLibreMapProps {
  center?: [number, number]; // Coordenadas [longitud, latitud]
  zoom?: number; // Nivel de zoom inicial
}

export const MapLibreMap: React.FC<MapLibreMapProps> = ({
  center = [-74.5, 40], // Valor por defecto
  zoom = 9,
}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<Map | null>(null);

  useEffect(() => {
    if (mapContainerRef.current && !mapInstanceRef.current) {
      mapInstanceRef.current = new maplibregl.Map({
        container: mapContainerRef.current, // Contenedor
        center,
        zoom,
        style: 'https://demotiles.maplibre.org/style.json',
      });
    }
  }, [center, zoom]);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '100vh' }} />;
};
