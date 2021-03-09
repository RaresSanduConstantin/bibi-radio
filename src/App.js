import { useState, useEffect } from 'react';
import { SearchBox } from './components/SearchBox';
import Stations from './components/Stations';
import stations from './data/stations';

const App = () => {
	const [ radios, setRadios ] = useState([]);
	const [ searchTerm, setSearchTerm ] = useState('');

	useEffect(
		() => {
			const results = stations.filter((station) => station.name.toLowerCase().includes(searchTerm.toLowerCase()));
			setRadios(results);
		},
		[ searchTerm ]
	);

	const handleChange = (e) => {
		e.preventDefault();
		setSearchTerm(e.target.value);
		console.log(searchTerm);
	};

	return (
		<div className="windowContainer">
			<div className="containerRad">
				<h1 className="title">Radio with love &#10084;</h1>
				<SearchBox placeholder="Search" handleChange={handleChange} />
				{radios.map((item) => <Stations item={item} />)}
			</div>
		</div>
	);
};

export default App;
