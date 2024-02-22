import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonSprite from './components/PokemonSprite';

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
  const incrementPokemon = () => {
    setDexNumber(prevDexNumber => prevDexNumber + 1);
  };

  const decrementPokemon = () => {
    if (dexNumber !== 0) {
      setDexNumber(prevDexNumber => prevDexNumber - 1);
    }
  }

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
      <div className="header">
        <h1 className="pl-90 text-3xl font-bold mb-5">Exercise 5: PokeDex</h1>
      </div>
      <div class="flex">
        <div class="w-1/2 mr-4 h-screen flex flex-col">
          <div class="mb-4 h-1/4">
            <PokemonSprite pokemonJSON={pokemonJSON} />
          </div>
          <div class="mb-4 h-1/4">Container 2</div>
          <div class="h-1/4">
            <button onClick={decrementPokemon} className="bg-gray-100 text-black px-7 py-1 rounded-md font-semibold hover:bg-gray-300 text-xl">
              &lt;
            </button>
            <button onClick={incrementPokemon} className="bg-gray-100 text-black px-7 py-1 rounded-md font-semibold hover:bg-gray-300 text-xl">
              &gt;
            </button>
          </div>
        </div>
        <div class="w-1/2 h-screen flex flex-col">
          <div class="mb-4 h-1/2">Container 1</div>
          <div class="h-1/2">Container 2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
