import React from 'react';

const PokemonSprite = ({ pokemonJSON }) => {
  return (
    <div class="flex justify-center">
      {pokemonJSON && (
        <div>
          <div>
            <div class="border-4 border-black border-solid flex justify-center items-center mb-3" style={{width: '300px', height: '300px'}}>
              <img src={pokemonJSON.sprites.front_default} alt={pokemonJSON.name} style={{ transform: 'scale(3.3)',}} />
            </div>
            <div class="border border-black border-solid flex justify-center items-center bg-neutral-300 font-bold rounded-lg" style={{width: '300px', height: '40px'}}>
              <p>{pokemonJSON.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonSprite;
