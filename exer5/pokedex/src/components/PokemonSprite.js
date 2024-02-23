import React from 'react';

const PokemonSprite = ({ pokemonJSON }) => {
  return (
    <div class="flex justify-center">
      {pokemonJSON && (
        <div>
          <div>
            <div class="border-4 border-black border-solid flex justify-center items-center" style={{width: '300px', height: '300px'}}>
              <img src={pokemonJSON.sprites.front_default} alt={pokemonJSON.name} style={{ transform: 'scale(3.3)',}} />
            </div>
            
            <p>{pokemonJSON.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonSprite;
