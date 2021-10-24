import { shallowMount } from "@vue/test-utils";
import PokemonPicture from "@/components/PokemonPicture";

describe("PokemonPicture component", () => {
  test("Debe de hacer match con el snatpshot", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  })

  test("debe de mostar la imagen oculta", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false,
      },
    });

    const [img1, img2] = wrapper.findAll("img");
    expect(img1.exists()).toBeTruthy();

    expect(img2).toBe(undefined);

    expect(img1.classes("hidden-pokemon")).toBeTruthy();

    expect( img1.attributes('src') ).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')

  })

  test("debe de mostar el pokemon si true", () => {
 		const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: true,
      },
    });
		
    const [, img2] = wrapper.findAll("img");

    expect(img2.exists()).toBeTruthy();

    expect(img2.classes('hidden-pokemon')).toBe(false);
		expect(img2.classes('fade-in')).toBe(true)


	})

})
