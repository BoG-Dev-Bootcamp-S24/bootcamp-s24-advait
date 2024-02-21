import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonSprite from './components/Display';

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
      <div className="header flex-box">
        <h1 className="pl-90 text-3xl font-bold">Exercise 5: PokeDex</h1>
      </div>
      <div className="flex mb-8">
        <div className="w-1/2 bg-gray-400 h-72">
          <div className="top-0 left-0 w-full h-30 bg-red-300">
            <PokemonSprite pokemonJSON={pokemonJSON} />
          </div>
          <div className="top-4 left-0 w-full h-20 bg-green-300"></div>
          <div className="top-8 left-0 w-full h-10 bg-white flex justify-center">
            <button onClick={decrementPokemon} className="bg-gray-200 text-black px-7 py-1 rounded-md font-semibold hover:bg-gray-500">
              &lt;
            </button>
            <p className="w-2"></p>
            <button onClick={incrementPokemon} className="bg-gray-200 text-black px-7 py-1 rounded-md font-semibold hover:bg-gray-500">
              &gt;
            </button>
          </div>
        </div>
        <div className="w-1/2 bg-gray-500 h-72">
        
        </div>
      </div>
    </div>
  );
}

export default App;
