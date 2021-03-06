import React from "react";
import stations from "../data/stations";

const Stations = () => {
  return (
    <>
      {stations.map((station) => (
        <>
          <h2>{station.name}</h2>
          <audio id="player" controls className="radioControls">
            <source
              src={station.href}
              type="audio/ogg"
              className="radioSource"
            ></source>
          </audio>
        </>
      ))}
    </>
  );
};

export default Stations;
