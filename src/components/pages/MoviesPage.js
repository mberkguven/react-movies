import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchMovies} from '../../actions/movies';
import MoviesList from '../MoviesList';

class MoviesPage extends Component {
    static propTypes = {
        movies: PropTypes.object.isRequired
    };

    componentDidMount(){
        this.props.fetchMovies();
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Movies Page</h2>
                <MoviesList movies = {this.props.movies.movies}></MoviesList>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
};

const mapDispatchToProps = {
    fetchMovies
};

export default connect(mapStateToProps,mapDispatchToProps)(MoviesPage);
