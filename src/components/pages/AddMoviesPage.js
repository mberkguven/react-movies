import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addMovies} from '../../actions/movies';
import { Container, Button, Input} from 'semantic-ui-react';


class AddMoviesPage extends Component {
    
    constructor(props) {
    super(props);
    this.state = {
        title: '',
        cover: ''
    };
        this.handleChange = this.handleChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }

    handleChange(event) {
         this.setState({
            [event.target.name]: event.target.value
         }); 
    }
    handleSend(){
        this.props.addMovies(this.state.title,this.state.cover);
    }
    
    render() {
        return (
            <div>
            <Container>
                    <h2>Add Movies</h2>
                    <div>
                        <Input type="text" name="title" className="inputs" onChange={this.handleChange} ></Input>
                        <br/><br/>
                        <Input type="text" name="cover" className="inputs" onChange={this.handleChange}></Input>
                        <br/><br/>
                      <Button onClick={this.handleSend}>ADD MOVIES</Button>
                    </div>
                </Container>
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
    addMovies
};

export default connect(mapStateToProps,mapDispatchToProps)(AddMoviesPage);
