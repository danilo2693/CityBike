import React, { useEffect } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { CityBikes } from "./components/cityBikes";
import { HistoryBikes } from "./components/historyBikes";
import { SelectedDate } from "./components/selectedDate";
import { useStations } from "./hooks/useStations";

export const App = () => {
  const { reset } = useStations();
  useEffect(() => {
    reset();
  }, []);
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-info bg-gradient mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CityBike
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/history-bikes"
                >
                  History
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={CityBikes} />
        <Route path="/history-bikes" component={HistoryBikes} />
        <Route path="/selected-date/:date" component={SelectedDate} />
      </Switch>
      <div className="mt-4 mb-4 animate__animated animate__fadeIn">
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
};
