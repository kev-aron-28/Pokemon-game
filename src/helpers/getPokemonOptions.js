import pokemonApi from '../api/pokemonApi'

const getPokemons = () => {
  const pokemonsArr = Array.from( Array(650) )
  return pokemonsArr.map( ( _ , index ) => index + 1 )

}

const getPokemonNames = async ( [a,b,c,d] = [] ) => {
  
  const promiseArr = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ]

  const [r1,r2,r3,r4] = await Promise.all(promiseArr)
  return [ 
    {name: r1.data.name, id: r1.data.id },
    {name: r2.data.name, id: r2.data.id },
    {name: r3.data.name, id: r3.data.id },
    {name: r4.data.name, id: r4.data.id },
  ]
}

const getPokemonOptions = async () => {

  const mixedPokemons = getPokemons().sort( () => Math.random()-0.5 )
  
  const names = await getPokemonNames( mixedPokemons.splice(0,4) )
  return names
} 

export default getPokemonOptions
