import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {

  const PokemonCards = pokemon.map((pokemonObj) => (
    <PokemonCard key={pokemonObj.id} pokemon={pokemonObj}/>
  ))
  return (
    <div>
      <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>
      {PokemonCards}
    </Card.Group>
    </div>

  );
}

export default PokemonCollection;
