import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import { Grid } from 'semantic-ui-react';
import { HashLoader } from 'react-spinners';
import {loaderStyle} from "../helpers/styleHelper";



const MoviesList = ({ movies,deleteMovie }) => {
	const emptyMessage = (
		<p>There are no movies yet.</p>
	);

	
	const moviesList = (
		<div>
			<HashLoader size={150} color={"#4BBFAD"} loading={movies.fetching} css={loaderStyle}/>
			{
				movies.error.response
					? <h3>Upss, something went wrong ! Error retrieving data!</h3>
					:
					<Grid stackable columns={3}>
						{
							movies.movieList.map(movie => <MovieCard
								 key={movie._id}
								 movie={movie}
								 deleteMovie={deleteMovie}
								   />)
						}
					</Grid>
			}
		</div>
	);

	return (
		<div>
			{ movies.length === 0 ? emptyMessage : moviesList }
		</div>
	);
};

MoviesList.propTypes = {
	movies: PropTypes.shape({
		movieList: PropTypes.array.isRequired
	}).isRequired
};

export default MoviesList;