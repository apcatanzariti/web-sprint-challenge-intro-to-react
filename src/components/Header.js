import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

export default function Header () {
    return (
        <StyledHeader>Rick and Morty Characters!</StyledHeader>
    );
}

const StyledHeader = styled.h1`
    // color: red;
    // border: solid 1px red;
    margin: 10%;
`;