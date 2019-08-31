import React from 'react'
import { Card, Image, Grid, Button, Icon, Modal, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const extra = (movie,deleteMovie) => {
    return (
        <div className="ui two buttons">
            <Button animated as={Link} to={`/movie/${movie._id}`}>
                <Button.Content hidden>Edit</Button.Content>
                <Button.Content visible>
                    <Icon name='edit' />
                </Button.Content>
            </Button>

            <Button animated='vertical' onClick={()=>deleteMovie(movie._id)}>
                <Button.Content hidden>Delete</Button.Content>
                <Button.Content visible>
                    <Icon name='trash' />
                </Button.Content>
             </Button>
             } 
        </div>
    );
};

const MovieCard = ({ movie,deleteMovie }) => (
    <Grid.Column>
        <Card>
            <Image src={movie.cover} />
            <Card.Content>
                <Card.Header>{movie.title}</Card.Header>
            </Card.Content>
            {extra(movie,deleteMovie)}
        </Card>
    </Grid.Column>
)

export default MovieCard;