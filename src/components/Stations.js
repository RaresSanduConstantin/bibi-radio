import { useState, useEffect } from 'react';


const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing, audio]
    );

    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, [audio]);

    return [playing, toggle];
  };



const Stations = ({ item }) => {
	const [ favorite, setFavorite ] = useState(false);
    const [playing, toggle] = useAudio(item.href);
    console.log(playing)
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
				<div onClick={toggle} class={!playing ? "img-container" : "img-container play"}>
					<img src={`${process.env.PUBLIC_URL}/static/${item.logo}.jpg`} alt="music-cover" id="cover" />
				</div>
                <button className='action-btn' onClick={toggle}>{playing ? <i class="fas fa-pause p"></i> : <i class="fas fa-play p"></i>}</button>
			</div>
		</div>
	);
};

export default Stations;
