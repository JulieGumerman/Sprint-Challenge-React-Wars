import React from "react";
import 'semantic-ui-css/semantic.min.css';
import styled from "styled-components";

const CardDiv=styled.div`
    width: 300px;
    border: solid 3px #707371;
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 5px;
    background: #dce0dd;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-contents: center;
`
const CardHeader=styled.h3`
    color: #707371;
    width: 80%;
    border-bottom: 1px solid #707371;
    margin: 0 auto;
    padding-bottom: 5px;
`
const FilmHeader=styled.h4 `
    margin-top: 5px;
    color: #707371;
`
const DataEntry=styled.p`
    margin-top: 0px;
    color: #707371;
`
const CardMaker = props => {
    return (
        <CardDiv>
          <CardHeader>{props.character.name}</CardHeader>
          <FilmHeader>Films: {props.character.films.length}</FilmHeader>
          <DataEntry>Birth Year: {props.character.birth_year}</DataEntry>
          <DataEntry>Gender: {props.character.gender}</DataEntry>
          <DataEntry>Eye Color: {props.character.eye_color}</DataEntry>
          <DataEntry>Height: {props.character.height}</DataEntry>
          <DataEntry>Mass: {props.character.mass}</DataEntry>
        </CardDiv>
    )
}

export default CardMaker;