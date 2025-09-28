import React from "react";

function Pokecard (props)
{
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

	return (
		<div>
			<h3>{props.name}</h3>
            <img src={imageUrl} alt={props.name} />
            <p>Type: {props.type}</p>
            <p>EXP: {props.base_experience}</p>
		</div>
	);
}
