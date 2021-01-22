import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

// Write your Character component here

export default function Character ( {name, gender, location, species, image, id} ) {
    return (
        <StyledCharacterContainer>
            <StyledImageDiv>
                <img src={image} />
            </StyledImageDiv>
            <StyledCharacterInfo>
                <h2>Name: {name}</h2>
                <p>Gender: {gender}</p>
                <p>Species: {species}</p>
                <p>Location: {location}</p>
            </StyledCharacterInfo>
        </StyledCharacterContainer>
    );
}

const StyledCharacterContainer = styled.div`
    // border: solid 1px black;
    padding: 2%;
    width: 100%;
    display: flex;
    align-items: flex-start;
    box-shadow: 2px 2px 10px;
    margin: 2%;
`;

const StyledImageDiv = styled.div`
    // border: solid 1px blue;
`;

const StyledCharacterInfo = styled.div`
    // border: solid 1px red;
    flex-direction: column;
    text-align: left;
    margin-top: 6%;
    margin-left: 2%;
    font-style: italic;
`;