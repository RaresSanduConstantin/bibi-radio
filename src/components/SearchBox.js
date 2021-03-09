import React from 'react';

export const SearchBox = ({ placeholder, handleChange }) => (
	<div className="wrap">
		<div className="search">
			<input className="searchTerm" type="search" placeholder={placeholder} onChange={handleChange} />
		</div>
	</div>
);
