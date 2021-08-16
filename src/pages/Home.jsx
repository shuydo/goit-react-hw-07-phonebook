import { useState } from "react";
import { useGetPokemonByNameQuery } from "../redux.poke/pokemon";

export const Home = () => {
  const [pokemonName, setPokemonName] = useState("");
  // const { data, error, isLoading, refetch,isUninitialized } = useGetPokemonByNameQuery(pokemonName, {
  const { data, error, isFetching, isError } = useGetPokemonByNameQuery(
    pokemonName,
    {
      skip: pokemonName === "",
      // pollingInterval:2000
      refethOnFocus: true,
    }
  );
  // console.log(isUninitialized)
  console.log("data: ", data);
  console.log("error: ", error);
  console.log("isFetching: ", isFetching);
  console.log("---------------");

  const handleSubmit = e => {
    e.preventDefault();
    setPokemonName(e.target.elements.pokemonName.value);
    e.target.reset();
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="pokemonName" />
        <button>Search</button>
      </form>

      {isFetching && <p>Loading</p>}

      {isError && <p>{error.data} </p>}

      {data && !isFetching && !isError && <h2>{data.name}</h2>}
      {/* <button onClick={refetch} disabled={isUninitialized}>
        Refetch
      </button> */}
    </>
  );
};
