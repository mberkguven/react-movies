import React from 'react'
import { Card, Image, Grid } from 'semantic-ui-react'

const MovieCard = ({movie}) => (
    <Grid.Column>
        <Card>
            <Image src={movie.cover} />
            <Card.Content>
            <Card.Header>{movie.title}</Card.Header>
            </Card.Content>
        </Card>
  </Grid.Column>

)

export default MovieCard;