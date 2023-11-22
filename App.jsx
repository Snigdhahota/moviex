import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/allcomponents';
import MovieList from './components/films';
import MovieList from './components/navbar';
import MovieList from './components/poster';

      const App = () => {
	const [films, setMovies] = useState([]);

	const getMovieRequest = async () => {
		const url = `https://swapi.dev/`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	return (
		<div className='container-fluid moviex'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='flims' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<films movies={films} />
			</div>
		</div>
	);
};

export default App;

  
