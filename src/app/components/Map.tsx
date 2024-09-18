import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { FC, useEffect, useState } from "react";
import { Icon } from "leaflet";

const customIcon = new Icon({
  iconUrl: "https://static.thenounproject.com/png/335079-200.png",
  iconSize: [42, 42],
});

type MapProps = {
  initialPosition: LatLngExpression;
};

const Map: FC<MapProps> = ({ initialPosition }) => {
  const [position, setPosition] = useState<LatLngExpression | null>(initialPosition);

  useEffect(() => {
    if (initialPosition) {
      setPosition(initialPosition);
    }
  }, [initialPosition]);
  return (
    <MapContainer
      center={position as LatLngExpression}
      zoom={15}
      zoomControl={false}
      style={{ height: "100%", width: "100%", zIndex: "10" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {position && (
        <Marker position={position} icon={customIcon}>
          <Popup autoPan>You are here {position.toString()}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
