import React from "react";
import Pokecard from "./Pokecard";

function Pokedex(props) {
  const pokemonList = props.pokemon;

  return (
    <div className="pokedex-container">
    <div className="pokedex-grid">
      <ul>
        {pokemonList.map((item) => (
          <div key={item.id} className="pokemon-box">
            <Pokecard
              id={item.id}
              name={item.name}
              type={item.type}
              base_experience={item.base_experience}
            />
          </div>
        ))}
      </ul>
    </div>     
    </div>
  );
}

export default Pokedex;
