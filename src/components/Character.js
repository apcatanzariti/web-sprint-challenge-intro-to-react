import React, { useState, useEffect } from 'react';

// Write your Character component here

export default function Character ( {name, gender, location, species, id} ) {
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Gender: {gender}</p>
            <p>Species: {species}</p>
            <p>Location: {location}</p>
        </div>
    );
}