import React from 'react';

const PokemonSprite = ({ pokemonJSON }) => {
  return (
    <div>
      {pokemonJSON && (
        <div>
          <h2>{pokemonJSON.name}</h2>
          <img src={pokemonJSON.sprites.front_default} alt={pokemonJSON.name} />
        </div>
      )}
    </div>
  );
}

export default PokemonSprite