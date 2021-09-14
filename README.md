# Reactomon

![bulba](https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png)

## Description
Create a basic frontend application in React using the [Pokemon API](https://pokeapi.co/).

## Tasks
You have to create a React application for [Pokemon API](https://pokeapi.co/). It should have 3 available routes for **listing pokemons**, **listing types** and a **detailed** view for specific Pokemons.

- create a **Navbar** component
  - it should contain *Links* to 2 routes: *Pokemons* and *Types*
- create a **PokemonList** component. It’s a simple component for listing every item [on this endpoint](https://pokeapi.co/api/v2/pokemon)
  - it’s available via the *Pokemons* link in the Navbar on *http://localhost:3000/pokemons*
- create a **TypeList** component. It’s a simple component for listing every item [on this endpoint](https://pokeapi.co/api/v2/type)
  - it’s available via the *Types* link in the Navbar on *http://localhost:3000/types*
- create a **PokemonDetail** component. It’s a detailed page about a Pokemon’s attributes, for example [Bulbasaur](https://pokeapi.co/api/v2/pokemon/1/)
  - these *Links* are available on the *Pokemons* page. Every listed Pokemon item should be a *Link* pointing to detailed pages, like *http://localhost:3000/pokemon/1*
  - use your imagination!
  
Here is a simple design for the *Pokemons* route, but please don’t replicate it, be creative instead!

![pokedesign]

## Requirements
- the above mentioned components (**Navbar**, **PokemonList**, etc.) are just the minimum requirements, your solution is better if you slice your big components into smaller ones
- create a Github repo and commit on every new component you create. It’s even better if you make [atomic commits](https://en.wikipedia.org/wiki/Atomic_commit)
- use *create-react-app*
- use *axios* for fetching data
- use *react-router-dom* for navigation



##### [Pokedex](https://www.pokemon.com/us/pokedex/)
