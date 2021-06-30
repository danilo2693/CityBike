import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MapBikes } from "./mapBikes";
import { SocketContext } from "../context/socket";
import { useStations } from "../hooks/useStations";
export const CityBikes = () => {
  const socket = useContext(SocketContext);
  const zoom = 13;
  const cityBikeInformationEndpoint = `${process.env.REACT_APP_BASE_URL}/cityBikeInformation`;
  const [information, setInformation] = useState({
    lat: 51.505,
    lng: -0.09,
    locationName: "",
    cityName: "",
  });
  const [stations, setStations] = useState([]);
  const [startSocket, setStartSocket] = useState(false);
  const { addStations } = useStations();

  useEffect(() => {
    getCityBikeInformation();
  }, []);

  const getCityBikeInformation = async () => {
    const {
      data: { location, name, stations },
    } = await axios.get(cityBikeInformationEndpoint);
    setInformation({
      lat: location.latitude,
      lng: location.longitude,
      locationName: location.city,
      cityName: name,
    });
    setStations(stations);
    setStartSocket(true);
  };

  useEffect(() => {
    if (startSocket && stations) {
      socket.on("city-bike-stations", (stations) => {
        setStations(stations);
        addStations(stations);
      });
      return () => socket.off("city-bike-stations");
    }
  }, [startSocket]);

  const position = [information.lat, information.lng];
  return (
    <div className="card p-4 map animate__animated animate__fadeIn">
      {information.cityName !== "" && (
        <h1 className="mb-4">
          {information.cityName} - {information.locationName}
        </h1>
      )}
      <MapBikes position={position} stations={stations} zoom={zoom} />
    </div>
  );
};
