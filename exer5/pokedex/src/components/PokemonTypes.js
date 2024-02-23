import React from 'react';

const PokemonTypes = ({ types }) => {
  const getTypeColor = (type) => {
    if (type === "normal") {
      return "A8A77A";
    } else if (type === "fire") {
      return "EE8130";
    } else if (type === "water") {
      return "6390F0";
    } else if (type === "electric") {
      return "F7D02C";
    } else if (type === "grass") {
      return "7AC74C";
    } else if (type === "ice") {
      return "96D9D6";
    } else if (type === "fighting") {
      return "C22E28";
    } else if (type === "poison") {
      return "A33EA1";
    } else if (type === "ground") {
      return "E2BF65";
    } else if (type === "flying") {
      return "A98FF3";
    } else if (type === "psychic") {
      return "F95587";
    } else if (type === "bug") {
      return "A6B91A";
    } else if (type === "rock") {
      return "B6A136";
    } else if (type === "ghost") {
      return "735797";
    } else if (type === "dragon") {
      return "6F35FC";
    } else if (type === "dark") {
      return "705746";
    } else if (type === "steel") {
      return "B7B7CE";
    } else if (type === "fairy") {
      return "D685AD";
    }
  }

  return (
    <div class="flex justify-center">
      <h2 class="font-bold">Types:</h2>
      <div class="inline-block">
        <ul>
          {types.map((type, index) => (
            <li key={index}>{type.type.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonTypes;