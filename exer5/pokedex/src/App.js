import React, { useState } from 'react';
import './App.css';

const URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemonJSON = async (dexNumber) => {
  try {
      const response = await fetch(`${URL}/{dexNumber}/`); //A string template literal; basically a more readable way to put variables in a string
      const pokemonJSON = await response.json();
      return pokemonJSON;
  } catch(e) {
      throw e;
  }
}





function App() {
  const [dexNumber, setDexNumber] = useState(1);
  const [pokemonJSON, setPokemonJSON] = useState(null);

  const fetchPokemon = async () => {
    try {
      const data = await getPokemonJSON(dexNumber);
      setPokemonJSON(data);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };


  return (
    <div>
      <div class="header flex-box">
        <h1 class="pl-90 text-3xl font-bold">Exercise 5: PokeDex</h1>
      </div>
      <div class="flex mb-4">
        <div class="w-1/2 bg-gray-400 h-15">
          <div class=" top-0 left-0 w-full h-5 bg-red-300"></div>
          <div class=" top-4 left-0 w-full h-5 bg-green-300"></div>
          <div class="top-8 left-0 w-full h-5 bg-blue-300"></div>
        </div>
        <div class="w-1/2 bg-gray-500 h-12"></div>
      </div>
    </div>
  );
}

export default App;
