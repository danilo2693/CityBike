import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";
import { SocketContext } from "../context/socket";
import { useStations } from "../hooks/useStations";

export const HistoryBikes = () => {
  const { getStations, addStations } = useStations();
  const socket = useContext(SocketContext);
  const [stations, setStations] = useState(getStations());
  useEffect(() => {
    socket.on("city-bike-stations", (stations) => {
      addStations(stations);
      setStations(getStations());
    });
    return () => socket.off("city-bike-stations");
  }, []);

  return (
    <>
      <div className="card p-4">
        <h1 className="mb-4 animate__animated animate__fadeIn">
          History bikes
        </h1>
        <div className="scrolled-table animate__animated animate__fadeIn">
          <table className="table mt-4">
            <thead>
              <tr className="fixed-th border-bottom">
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {stations.map((register, index) => (
                <tr key={index} className="animate__animated animate__fadeIn">
                  <td>{index}</td>
                  <td>
                    {moment(register.date).format("MMMM DD YYYY, h:mm:ss a")}
                  </td>
                  <td>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to={`/selected-date/${register.date}`}
                    >
                      <span className="material-icons">visibility</span>
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
