const Stations = ({ item }) => {
	return (
		<div>
			<div className="radioContainer">
				<h2 className="radioTitle">{item.name}</h2>
				<audio id="player" controls className="radioControls">
					<source src={item.href} type="audio/ogg" className="radioSource" />
				</audio>
			</div>
		</div>
	);
};

export default Stations;
