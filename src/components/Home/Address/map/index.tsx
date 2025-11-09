"use client";
import { useEffect, useMemo, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import RoutingButton from "@/ui/Buttons/Routing";

type Coordinates = [number, number];

const Map = ({ location }: { location: string | null }) => {
  const [center, setCenter] = useState<Coordinates | null>(null);

  useEffect(() => {
    if (!location) return;
    const parts = location.split(",").map((s) => s.trim());
    if (parts.length !== 2) return;
    const lat = parseFloat(parts[0]);
    const lng = parseFloat(parts[1]);
    if (Number.isFinite(lat) && Number.isFinite(lng)) {
      setCenter([lat, lng]);
    }
  }, [location]);

  const icon = useMemo(
    () =>
      L.icon({
        iconUrl: `/images/Subtract.svg`,
        iconSize: new L.Point(60, 60),
      }),
    []
  );

  const handleMapClick = () => {
    if (!center) return;
    const lat = center[0];
    const lng = center[1];

    if (/Android/i.test(navigator.userAgent)) {
      // android
      window.location.href = `geo:${lat},${lng}?q=${lat},${lng}`;
    } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      // ios
      window.location.href = `http://maps.apple.com/?daddr=${lat},${lng}`;
    } else {
      // windows
      window.open(
        `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
      );
    }
  };

  const displayMap = useMemo(() => {
    if (!center) return null;
    return (
      <MapContainer
        style={{ height: "100%" }}
        center={center as unknown as L.LatLngExpression}
        zoom={15}
        scrollWheelZoom
        dragging={true}
        touchZoom={true}
        markerZoomAnimation={true}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          icon={icon}
          position={center as unknown as L.LatLngExpression}
        />
      </MapContainer>
    );
  }, [center, icon]);

  if (!center) return null;

  return (
    <div className="h-full w-full relative overflow-hidden">
      {displayMap}
      <div
        className="absolute top-[75%] lg:top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-401"
        onClick={handleMapClick}
      >
        <RoutingButton />
      </div>
    </div>
  );
};

export default Map;
