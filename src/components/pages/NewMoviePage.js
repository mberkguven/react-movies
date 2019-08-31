import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewMovieForm from '../NewMovieForm';
import { onNewMovieSubmit } from '../../actions/newMovie';


export class NewMoviePage extends Component {

    render() {
        return (
                <NewMovieForm onNewMovieSubmit={this.props.onNewMovieSubmit}/>
        )
    }
}

const mapStateToProps = ({newMovie}) => {
    return {
        newMovie
    }
};

const mapDispatchToProps = {
    onNewMovieSubmit
};


export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage);
