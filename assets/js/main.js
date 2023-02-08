
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`




function convertPokemonToHtml(pokemon){
    return`
    <li class="pokemon" ${pokemon.type}>
    <span class="numero">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>      
    <div class="detalhe">
    <ol class="tipos">
        ${pokemon.types.map((type) => `<li class="tipo ${type}">${type}</li>`).join('')}
    </ol>
    <img src="${pokemon.photo}" 
    alt="${pokemon.name}">  
    </div>        
    </li>  
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
   const newHtml = pokemons.map(convertPokemonToHtml).join('')
    pokemonList.innerHTML = newHtml
})
   


