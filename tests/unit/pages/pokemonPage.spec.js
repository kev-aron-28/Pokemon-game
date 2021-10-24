import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import {pokemons} from '../mocks/pokemons.mock'
describe('PokemonPage component ', () => {
		
	let wrapper
	beforeEach(() => {
		wrapper = shallowMount( PokemonPage )
 
	})

	test('debe de hacer match con el snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot()
	})
	
	test('debe de llamar el mixed pokemon al montar', () => {
		
		const mixPokemonArrSpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArr')	
		const wrapper = shallowMount(PokemonPage)
		expect(mixPokemonArrSpy).toHaveBeenCalled()

	})


	test('debe de hacer match con el snapshot cuando carga los pokemons', () => {
		const wrapper = mount(PokemonPage, {
			data(){
				return {
					pokemonArr: pokemons,
      		pokemon: pokemons[0],
      		showPokemon: false,
      		showAnser: false,
      		message: ''
				}
			}
		})
		
		expect( wrapper.html() ).toMatchSnapshot()
	})

	test('debe de mostrar los componentes de pokemonPicture y pokemonOptions', () => {
			const wrapper = shallowMount(PokemonPage, {
				data(){
					return {
					pokemonArr: pokemons,
      		pokemon: pokemons[0],
      		showPokemon: false,
      		showAnser: false,
      		message: ''
				}
			}
		})

		const picture = wrapper.find('pokemon-picture-stub')
		const options = wrapper.find('pokemon-options-stub')
		expect( picture.exists() ).toBeTruthy()
		expect( options.exists() ).toBe(true)

		expect( picture.attributes('pokemonid') ).toBe('1')
		expect( options.attributes('pokemons') ).toBeTruthy()
	})

	test('pruebas en el checkanswer respuesta correcta', async () => {
		const wrapper = shallowMount(PokemonPage, {
				data(){
					return {
					pokemonArr: pokemons,
      		pokemon: pokemons[0],
      		showPokemon: false,
      		showAnser: false,
      		message: ''
				}
			}
		})
		
		await wrapper.vm.checkAnswer(1)

		expect( wrapper.find('h2').exists() ).toBeTruthy()
		expect( wrapper.find('h2').text() ).toBe('Correcto')
		expect( wrapper.vm.showPokemon ).toBeTruthy()
	})


	test('Pruebas en el checkanswer respuesta incorrecta', async () => {
		const wrapper = shallowMount(PokemonPage, {
    	data() {
      	return {
        	pokemonArr: pokemons,
        	pokemon: pokemons[0],
        	showPokemon: false,
        	showAnser: false,
        	message: "",
      	}
    	},
  	});

		await wrapper.vm.checkAnswer(2)
		
		expect( wrapper.vm.message ).not.toBe('Correcto')

	})

})
