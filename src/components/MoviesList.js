import React from 'react'
import PropTypes from 'prop-types'

const  MoviesList = ({movies}) => {
    const emptyMessage= (
        <p>There are no movies yet.</p>
    );
    const moviesList = (
        <div>
           {movies.map( movie => 
            <li key={movie._id}> 
            {movie.title}
            <img src={movie.cover}></img>

            </li>)}
        </div>
    );

    return (
        <div>
           { movies.length === 0 ? emptyMessage : moviesList }
        </div>
    );
}

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired
};

export default MoviesList;
