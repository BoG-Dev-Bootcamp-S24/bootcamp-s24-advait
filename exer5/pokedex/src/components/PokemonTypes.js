import React from 'react';

const PokemonTypes = ({ types }) => {
  return (
    <div>
      <h2 class="font-bold">Types:</h2>
      <ul>
        {types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonTypes;