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
				<div className="titleAndHeart" onClick={favoriteRadio}>
					<h2 className="radioTitle">{item.name}</h2>

					<i class={!favorite ? 'fas fa-heart fa-2x heartBg' : 'fas fa-heart fa-2x heartBgFav'} />
				</div>
				<div class="img-container">
					<img src={`${process.env.PUBLIC_URL}/static/${item.logo}.jpg`} alt="music-cover" id="cover" />
				</div>
				<audio id="player" controls className="radioControls">
					<source src={item.href} type="audio/mpeg" className="radioSource" />
				</audio>
			</div>
		</div>
	);
};

export default Stations;
