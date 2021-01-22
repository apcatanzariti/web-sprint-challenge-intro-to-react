import React from 'react';
import styled from 'styled-components'

// Write your Character component here

export default function Character ( {name, gender, location, species, image, created, status, id} ) {
    return (
        <StyledCharacterContainer>
            <StyledImageDiv>
                <img src={image} alt={name}/>
            </StyledImageDiv>
            <StyledCharacterInfo>
                <h2>Name: {name}</h2>
                <p>Gender: {gender}</p>
                <p>Species: {species}</p>
                <p>Location: {location}</p>
                <p>Status: {status}</p>
                <p>Created: {created}</p>
            </StyledCharacterInfo>
        </StyledCharacterContainer>
    );
}

const StyledCharacterContainer = styled.div`
    border: solid 1px pink;
    padding: 2%;
    width: 100%;
    background-color: white;
    display: flex;
    // align-items: flex-start;
    box-shadow: 2px 2px 10px;
    margin: 2%;
`;

const StyledImageDiv = styled.div`
    // border: solid 2px #01aec6;
`;

const StyledCharacterInfo = styled.div`
    border: solid 1px red;
    // flex-direction: column;
    text-align: left;
    margin-left: 2%;
    font-style: italic;

    p {
        margin: 5% 0% 0% 0%;
    }

    h2 {
        border: solid 1px green;
        display: inline;
    }
`;