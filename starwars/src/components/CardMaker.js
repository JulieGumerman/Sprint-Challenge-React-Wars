import React from "react";
import {Card, Divider, Grid} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

const CardMaker = props => {
    return (
        <Grid.Column padded>
        <Card>
        <Card.Content>
          <Card.Header>{props.character.name}</Card.Header>
          <Card.Meta>
            <span className='date'>Films: {props.character.films.length} </span>
          </Card.Meta>
          <Divider/>
          
            <p>Birth Year: {props.character.birth_year}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Eye Color: {props.character.eye_color}</p>
            <p>Height: {props.character.height}</p>
            <p>Mass: {props.character.mass}</p>


    
        </Card.Content>
      </Card>
      </Grid.Column>
    )
}

export default CardMaker;