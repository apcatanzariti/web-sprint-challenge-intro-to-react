import React, { useState, useEffect } from 'react';
import './App.css';
import {  BASE_URL, API_KEY } from './constants/index';
import axios from 'axios'
import Character from './components/Character'
import Header from './components/Header'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [ characters, setCharacters ] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
    .get(BASE_URL + API_KEY)
    .then((res) => {
      setCharacters(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <div className="App">
      <Header />
      {
        characters.map(info =>{
          return <Character name={info.name} gender={info.gender} location={info.location.name} species={info.species} image={info.image} id={info.id}/>
        })
      }
    </div>
  );
}

export default App;
