import React from 'react';

const PokemonSprite = ({ pokemonJSON }) => {
  return (
    <div className="">
      {pokemonJSON && (
        <div>
          <div>
            <img src={pokemonJSON.sprites.front_default} alt={pokemonJSON.name} style={{ transform: 'scale(2)', transformOrigin: 'top left' }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonSprite;
