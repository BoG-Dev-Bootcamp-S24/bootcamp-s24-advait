import React, { useState, useEffect } from 'react';
import './App.css';

const URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemonJSON = async (dexNumber) => {
  try {
      const response = await fetch(`${URL}/${dexNumber}/`);
      const pokemonJSON = await response.json();
      return pokemonJSON;
  } catch(e) {
      throw e;
  }
}

function App() {
  const [dexNumber, setDexNumber] = useState(1); // State to store dexNumber
  const [pokemonJSON, setPokemonJSON] = useState(null); // State to store Pokemon data

  // Function to fetch Pokemon data based on dexNumber
  const fetchPokemon = async () => {
    try {
      const data = await getPokemonJSON(dexNumber);
      setPokemonJSON(data);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  // Function to handle button click and increment dexNumber
  const handleButtonClick = () => {
    setDexNumber(prevDexNumber => prevDexNumber + 1);
  };

  // Fetch initial Pokemon data when component mounts
  useEffect(() => {
    fetchPokemon();
  }, []);

  // Update Pokemon data when dexNumber changes
  useEffect(() => {
    fetchPokemon();
  }, [dexNumber]);

  return (
    <div>
      <div className="header flex-box">
        <h1 className="pl-90 text-3xl font-bold">Exercise 5: PokeDex</h1>
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 bg-gray-400 h-15">
          <div className="top-0 left-0 w-full h-5 bg-red-300"></div>
          <div className="top-4 left-0 w-full h-5 bg-green-300"></div>
          <div className="top-8 left-0 w-full h-5 bg-blue-300"></div>
        </div>
        <div className="w-1/2 bg-gray-500 h-50">
          <button onClick={handleButtonClick}>Next Pokemon</button>
          {pokemonJSON && (
            <div>
              <h2>{pokemonJSON.name}</h2>
              <img src={pokemonJSON.sprites.front_default} alt={pokemonJSON.name} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
