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
          <div class="flex flex-col justify-center items-center mb-3">
            <h3 class="font-bold">Info</h3>
            <div className="items-center bg-neutral-300 mr-3 pl-1 pt-1" style={{ width: '250px', height: '350px'}}>
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
          </div>
        ) : (
          <div class="flex flex-col justify-center items-center mb-3">
            <h3 class="font-bold">Moves</h3>
            <div className="items-center bg-neutral-300 mr-3 pl-1 pt-1" style={{ width: '250px', height: '350px', overflow: 'auto'}}>
              <ul>
                {moves.map((move, index) => (
                  <li key={index}>{move.move.name}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div class="flex justify-center">
        <button 
          onClick={toggleDisplay} 
          className="border border-solid flex justify-center items-center font-medium rounded bg-neutral-300 mr-3" 
          style={{ width: '70px', height: '30px'}}
        >
          Info
        </button>
        <button 
          onClick={toggleDisplay} 
          className="border border-solid flex justify-center items-center font-medium rounded bg-green-500 mr-3" 
          style={{ width: '70px', height: '30px'}}
        >
          Moves
        </button>
      </div>
    </div>
  );
}

export default PokemonDetails;
