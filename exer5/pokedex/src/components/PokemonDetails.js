// PokemonDetails.js
import React, { useState } from 'react';

const PokemonDetails = ({ height, weight, stats, moves }) => {
  const [displayStats, setDisplayStats] = useState(true); // State to track whether to display stats or moves

  const toggleDisplay = () => {
    setDisplayStats(prevState => !prevState); // Toggle between displaying stats and moves
  };

  return (
    <div>
      <div class="flex justify-center">
        {displayStats ? (
          <div>
            <p class="font-bold">Info</p>
            <ul>
                <li>height: {height}m</li>
                <li>weight: {weight}kg</li>
                {stats.map((stat, index) => (
                    <li key={index}>
                    {stat.stat.name}: {stat.base_stat}
                    </li>
                ))}
            </ul>
          </div>
        ) : (
          <div>
            <p class="font-bold">Moves</p>
            <ul>
              {moves.map((move, index) => (
                <li key={index}>{move.move.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div class="flex justify-center">
        <button onClick={toggleDisplay}>Info</button>
        <button onClick={toggleDisplay}>Moves</button>
      </div>
    </div>
  );
}

export default PokemonDetails;
