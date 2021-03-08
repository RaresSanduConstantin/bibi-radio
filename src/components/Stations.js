import React from 'react';
import stations from '../data/stations';

const Stations = () => {
	return (
		<div>
			{stations.map((station) => (
				<div className="radioContainer">
					<h2 className="radioTitle">{station.name}</h2>
					<audio id="player" controls className="radioControls">
						<source src={station.href} type="audio/ogg" className="radioSource" />
					</audio>
				</div>
			))}
		</div>
	);
};

export default Stations;
