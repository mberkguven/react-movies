import React from 'react'
import PropTypes from 'prop-types'
import '../App.css';


const  MoviesList = ({movies}) => {
    const emptyMessage= (
        <h3>There are no movies yet.</h3>
    );
    const moviesList = (
    //    {
        //    movies.error.response ? <h3>Error retrieving data.</h3> : 
           <div className="ui three column grid">
            {movies.movies.map( movie => 
                <div className="column" key={movie._id}>
                    <div className="ui fluid card" >  
                        <div className="image">
                            <img src={movie.cover} alt={movie.cover} className="ui fluid image"></img>
                        </div>
                        <div className="content">
                            <p className="header">{movie.title}</p>
                        </div>
                    </div>
               </div>
               )}
            </div>
    //    }
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
