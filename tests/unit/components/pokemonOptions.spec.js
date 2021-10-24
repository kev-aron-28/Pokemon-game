import { shallowMount } from "@vue/test-utils";
import pokemonOptions from "@/components/pokemonOptions";

import { pokemons } from "../mocks/pokemons.mock";

describe("PokemonOptions Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(pokemonOptions, {
      props: {
        pokemons
      }
    });
  });

  test('debe de hacer match con el snapshot', () => {    // toMatchInlineSnapshot
    expect(wrapper.html()).toMatchSnapshot();
  });


  test( 'debe de mostar las cuatro opciones correctamente' , () => {
    const [l1,l2,l3,l4] = wrapper.findAll('li')
    expect(l1.text()).toBe('bulbasaur')
    expect(l2.text()).toBe('ivysaur')
    expect(l3.text()).toBe('venusaur')
    expect(l4.text()).toBe('charmander')
  })

  test( 'debe de emitir selection con sus respectivos valores' , () => {
    
    const [l1,l2,l3,l4] = wrapper.findAll('li')
    l1.trigger('click')
    l2.trigger('click')
    l3.trigger('click')
    l4.trigger('click')
    expect(wrapper.emitted('selection').length).toBe(4)

    expect(wrapper.emitted('selection')[0]).toEqual([ 1 ])
    expect(wrapper.emitted('selection')[1]).toEqual([ 2 ])
    expect(wrapper.emitted('selection')[2]).toEqual([ 3 ])
    expect(wrapper.emitted('selection')[3]).toEqual([ 4 ])
  })


})
