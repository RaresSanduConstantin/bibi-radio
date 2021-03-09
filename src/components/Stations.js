import { useState } from 'react';

const Stations = ({ item }) => {
	const [ favorite, setFavorite ] = useState(false);

	const favoriteRadio = () => {
		if (!favorite) {
			setFavorite(true);
		} else {
			setFavorite(false);
		}
	};

	return (
		<div>
			<div className="radioContainer">
				<h2 className="radioTitle">{item.name}</h2>

				<i
					class={!favorite ? 'fas fa-heart fa-2x heartBg' : 'fas fa-heart fa-2x heartBgFav'}
					onClick={favoriteRadio}
				/>

				<audio id="player" controls className="radioControls">
					<source src={item.href} type="audio/ogg" className="radioSource" />
				</audio>
			</div>
		</div>
	);
};

export default Stations;
