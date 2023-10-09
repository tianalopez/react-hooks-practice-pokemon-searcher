import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');

  //fetch pokemon
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(setPokemon)
    .catch(err => alert(err))
  }, [])

  //set search for pokemon by name
  const onSearch = (searchValue) => {
    setSearch((value) => searchValue.toUpperCase())
  }
  //filter pokemon obj if name contains search
  const visiblePokemon = pokemon.filter((pokemon) => {
    const name = pokemon.name.toUpperCase()
    return name.includes(search) || null
})
  //form submission to add to pokemon set
  const onFormSubmit = (pokemonObj) => {
    console.log(pokemonObj)
    fetch('http://localhost:3001/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(pokemonObj)
    })
    .then(r => r.json())
    .then((newObj) => setPokemon([...pokemon, pokemonObj]))
    .catch(err => alert(err))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onFormSubmit={onFormSubmit}/>
      <br />
      <Search onSearch={onSearch}/>
      <br />
      <PokemonCollection pokemon={visiblePokemon} />
    </Container>
  );
}

export default PokemonPage;
