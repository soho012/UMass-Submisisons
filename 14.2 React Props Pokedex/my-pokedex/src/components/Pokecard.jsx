import React from "react";

function Pokecard(props) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;

  return (
    <div className="pokemon-card">
      <h3>{props.name}</h3>
      <img src={imageUrl} alt={props.name} />
      <p>Type: {props.type}</p>
      <p>EXP: {props.base_experience}</p>
    </div>
  );
}

export default Pokecard;
