import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [shownPokemon, setShownPokemon] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(response => response.json())
    .then(pokemons => setShownPokemon(pokemons))
  }, [])

  function handleSearch(searchText) {
    setSearch(searchText)
  }

  const filteredPokemon = shownPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))

  function handleNewPokemon(newPokemon) {
    setShownPokemon([...shownPokemon, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={handleNewPokemon}/>
      <br />
      <Search handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemons={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
