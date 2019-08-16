import React, { useState, useEffect} from "react";
import axios from "axios";
import CardMaker from "./CardMaker"
import styled from "styled-components";

let ContainerDiv=styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;`

const CardPopulator = () => {
    console.log("Hi");

    const [characters, setCharacters] = useState([]);
    const [charactersMore, setCharactersMore] = useState([]);
    useEffect(()=>{
        axios.get("https://swapi.co/api/people")
        .then(response => {
            let characters = response.data.results;
            console.log(response);
            setCharacters(characters);
        }) //close "then"
    }, []);

    useEffect(() => {
        axios.get("https://swapi.co/api/people/?page=2")
            .then(response => {
                let charactersMore = response.data.results;
                setCharactersMore(charactersMore);
    })}, []);


    return (
        <ContainerDiv>
            {characters.map(character => {
                return (
                    <CardMaker key={character.height} character={character}/>
                )
            })}
            {
                charactersMore.map(character => {
                    return(
                        <CardMaker key={character.mass} character={character} />
                    )
                })
            }
        </ContainerDiv>
    )
}

export default CardPopulator;