import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect (() => {
    axios
      .get(`https://swapi.py4e.com/api/people`)
      .then ((res) => {
        setCharacter(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const List = styled.li`
    list-style: none;
  `;

  const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 75%;
    margin: auto;
  `;

  return (
    <div className="App container-fluid">
      <h1 className="Header">Characters</h1>
      <FlexBox>
      {character.map((i) => (
        <List key={i}>
          <Character 
          name={i.name}
          birth={i.birth_year} 
          gender={i.gender} 
          height={i.height}
          weight={i.mass}
           />
        </List>
      ))}
      </FlexBox>
    </div>
  );
};

export default App;
