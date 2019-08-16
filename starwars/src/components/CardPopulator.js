import React, { useState, useEffect} from "react";
import { Container, Grid } from "semantic-ui-react";
import axios from "axios";
import CardMaker from "./CardMaker"

const CardPopulator = () => {
    console.log("Hi");

    const [characters, setCharacters] = useState([]);
    useEffect(()=>{
        axios.get("https://swapi.co/api/people")
        .then(response => {
            let characters = response.data.results;
            console.log(response);
            setCharacters(characters);
        }) //close "then"
    }, []);


    return (
        <Container>
            <Grid divided="vertically">
                <Grid.Row padded columns={3}>
            {characters.map(character => {
                return (
                    <CardMaker key={character.height} character={character}/>
                )
            })}
            </Grid.Row>
            </Grid>
        </Container>
    )
}

export default CardPopulator;