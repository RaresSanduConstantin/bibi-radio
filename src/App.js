import { useState, useEffect } from 'react';
import { SearchBox } from './components/SearchBox';
import Stations from './components/Stations';
// import stations from './data/stations';
import {  useDispatch } from 'react-redux';
import { searchRadio } from './slices/radioSlice';


const App = () => {
	// const [ radios, setRadios ] = useState([]);
	const [ searchTerm, setSearchTerm ] = useState('');
	// const radios = useSelector(state => state.radio.radios);
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(searchRadio(searchTerm));
		},
		[ searchTerm, dispatch ]
	);

	const handleChange = (e) => {
		e.preventDefault();
		setSearchTerm(e.target.value);
	};

	return (
		<div className="windowContainer">
			<div className="containerRad">
				<h1 className="title">Radio with love &#10084;</h1>
				<SearchBox placeholder="Search" handleChange={handleChange} />
				<Stations />
			</div>
			<br />
		</div>
	);
};

export default App;
