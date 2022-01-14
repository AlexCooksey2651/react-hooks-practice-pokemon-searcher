import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {
  const pokemonCards = pokemons.map(pokemon => {
    return(
      <PokemonCard key={pokemon.id} pokemonData={pokemon}/>
    )
  })
  return (
    <div>
      <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6} >
        {pokemonCards}
      </Card.Group>
    </div>
  );
}

export default PokemonCollection;
