import React from 'react';
import styled from 'styled-components'

export default function Header () {
    return (
        <StyledHeader>Rick and Morty Characters!</StyledHeader>
    );
}

const StyledHeader = styled.h1`
    // color: #01aec6;
    // border: solid 1px red;
    margin: 10%;
`;