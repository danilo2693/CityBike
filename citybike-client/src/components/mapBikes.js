import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

export const MapBikes = ({ position, stations, zoom }) => {
  const path = process.env.PUBLIC_URL;
  const icon = new Icon({
    iconSize: [20, 20],
    iconUrl: `${path}/bike.png`,
  });
  return (
    <Map center={position} zoom={zoom} className="card">
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stations &&
        stations.length > 0 &&
        stations.map((station) => (
          <Marker
            key={station.id}
            position={[station.latitude, station.longitude]}
            icon={icon}
          >
            <Popup>
              <h6>Name station: {station.name}</h6>
              <hr />
              <div className="text-center">
                <p>Empty slots: {station.empty_slots}</p>
                <p>Free bikes: {station.free_bikes}</p>
              </div>
            </Popup>
          </Marker>
        ))}
    </Map>
  );
};
