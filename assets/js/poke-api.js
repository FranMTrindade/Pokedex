


const pokeApi = {}

function convertPokeApiDetailToPoke(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type
    
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon


}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
    .then(convertPokeApiDetailToPoke)
}



pokeApi.getPokemons = (offset = 0, limit = 151) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
   
   return  fetch(url)
    .then((response) =>  response.json())
    .then((jsonBody) =>  jsonBody.results) 
    .then((pokeList) => pokeList.map(pokeApi.getPokemonDetail))
    .then((requisicoes) => Promise.all(requisicoes))
    .then((pokemondetails) => pokemondetails)
}