import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleRadio } from '../slices/radioSlice';

// const useAudio = url => {

//     const [audio] = useState(new Audio(url));
//     const [playing, setPlaying] = useState(false);

//     const toggle = () => setPlaying(!playing);

//     useEffect(() => {
//         playing ? audio.play() : audio.pause();
//       },
//       [playing, audio]
//     );

//     useEffect(() => {
//       audio.addEventListener('ended', () => setPlaying(false));
//       return () => {
//         audio.removeEventListener('ended', () => setPlaying(false));
//       };
//     }, [audio]);

//     return [playing, toggle];
//   };

const Stations = () => {
  const dispatch = useDispatch();
  const radios = useSelector((state) => state.radio.radios);

  const [href, setHref] = useState({
    prev: '',
    curr: '',
  });
  const [audio] = useState(new Audio());
  const [favorite, setFavorite] = useState(false);
  console.log(href);

  useEffect(() => {
    // fiter the radios with isPlaying = true
    const playing = radios.filter((radio) => radio.isPlaying);
    // if there is a radio playing, set the href to the radio url
    if (playing.length > 0) {
      setHref({
        prev: href.curr,
        curr: playing[0].href,
      });
    }
  }, [radios]);

  useEffect(() => {
    if (href.prev !== href.curr) {
      audio.src = href.curr;
      audio.play();
    } else {
		audio.src = href.prev;
      audio.pause();
    }
  }, [href]);

  const favoriteRadio = () => {
    if (!favorite) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  };

  const handleClickIsPlaying = (item) => {
    dispatch(toggleRadio(item.id));
  };

  console.log(radios);

  return radios.map((item) => {
    return (
      <div key={item.id}>
        <div className='radioContainer'>
          <div className='titleAndHeart' onClick={favoriteRadio}>
            <h2 className='radioTitle'>{item.name}</h2>

            <i
              className={
                !favorite
                  ? 'fas fa-heart fa-2x heartBg'
                  : 'fas fa-heart fa-2x heartBgFav'
              }
            />
          </div>
          <div
            onClick={() => handleClickIsPlaying(item)}
            className={!item.isPlaying ? 'img-container' : 'img-container play'}
          >
            <img
              src={`${process.env.PUBLIC_URL}/static/${item.logo}.jpg`}
              alt='music-cover'
              id='cover'
            />
          </div>
          <button
            className='action-btn'
            onClick={() => handleClickIsPlaying(item)}
          >
            {item.isPlaying ? (
              <i className='fas fa-pause p'></i>
            ) : (
              <i className='fas fa-play p'></i>
            )}
          </button>
        </div>
      </div>
    );
  });
};

export default Stations;
