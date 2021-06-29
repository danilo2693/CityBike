import React from "react";
import { useStations } from "../hooks/useStations";
import { MapBikes } from "./mapBikes";
import moment from "moment";
import { NavLink } from "react-router-dom";

export const SelectedDate = ({
  match: {
    params: { date },
  },
}) => {
  const { getStations } = useStations();
  const stationsHistory = getStations();
  const selectedStationHistory = stationsHistory.find(
    (station) => station.date === date
  );
  const selectedStation = selectedStationHistory
    ? selectedStationHistory.stations
    : [];

  return (
    <div className="card p-4 map animate__animated animate__fadeIn">
      {date !== "" && (
        <div className="d-flex justify-content-start align-items-center mb-4">
          <NavLink className="btn btn-primary me-2" activeClassName="active" to={`/history-bikes`}>Back</NavLink>
          <h1>{moment(date).format("MMMM DD YYYY, h:mm:ss a")}</h1>
        </div>
      )}
      <MapBikes
        position={[25.790654, -80.1300455]}
        stations={selectedStation}
        zoom={13}
      />
    </div>
  );
};
