import getPokemonOptions, { getPokemons, getPokemonNames } from '../../../src/helpers/getPokemonOptions'

describe('get pokemonOptions helper', () => {
	test('debe de regresar un array de numberos', () => {
		const p = getPokemons()
		expect( p.length ).toBe(650)
		expect( p[0] ).toBe(1)
	   expect( p[500] ).toBe(501)
	})

	test('debe retornar un arreglo de cuatro elementos ' , async  () => {
		const p = await getPokemonNames([1,2,3,4])
		expect(p).toStrictEqual([
      { name: 'bulbasaur', id: 1 },
      { name: 'ivysaur', id: 2 },
      { name: 'venusaur', id: 3 },
      { name: 'charmander', id: 4 }
    ])
	
	})



	test('getPokemonOptions debe retornar un arreglo mezclado ', async () => {
		const p = await getPokemonOptions()
		expect( p ).toEqual([
      {
				name: expect.any(String),
				id: expect.any(Number) 
			},
      { 
				name: expect.any(String), 
				id: expect.any(Number) 
			},
      { 
				name: expect.any(String), 
				id: expect.any(Number) 
			},
      { 
				name: expect.any(String), 
				id: expect.any(Number) 
			}
    ])
	})

})
