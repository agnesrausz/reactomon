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
##

<br />
<br />
<br />
<br />




# Reactomon+
## Reactomon Hooked
![bulba](https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png)

## Description
Evolve your previously written **Reactomon App**!

## Tasks
Rewrite *all* of your components to **Functional Components with Hooks**.

## Requirements
- yes, all of it. It’s not that much as you think
- create a new **feature branch** and commit every change to your Github repo
##

<br />
<br />
<br />
<br />




# Reactomon++
## Reactomon Styled
![bulba](https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png)

## Description
Evolve your previously written **Reactomon+ App**!

## Tasks
**Add some styling** (and even multiple theme options) to your app.

- your **Navbar** should be or should contain some styled components
- create some nice styling for your **PokemonList route**. For example, create a [card component](https://www.w3schools.com/howto/howto_css_cards.asp) for your Pokemon items listed in this page. It’s up to you

## Requirements
- use **styled-components**
- please don’t make my eyes bleed 😢 For every bad design, a viking cries in Valhalla
- create a new **feature branch** and commit every change to your Github repo
##

<br />
<br />
<br />
<br />




## Reactomon +++
## Reactomon in Context
![bulba](https://static.pokemonpets.com/images/monsters-images-800-800/8003-Mega-Venusaur.png)

## Description
Evolve your previously written **Reactomon++ App**!

## Tasks
You can choose from two options (choose both for a fully evolved Reactomon App):

- add a [Theme switcher button](https://cdn.dribbble.com/users/3482593/screenshots/6844698/switch.gif) to your Navbar
-it should affect at least 2 components anywhere in your component tree
  - you should switch between a *colourful* and a *blackandwhite* theme
  - colours are up to you
  - [this article](https://www.smashingmagazine.com/2020/01/introduction-react-context-api/) could help a lot
- or implement a Gotta *Catch ’Em All* whatever
  - add a *Catch!* button to every listed Pokemon on PokemonList component
  - add a *Catch!* button to the PokemonDetail component
  - every catched Pokemon should go to your Context
  - create a new Route and a CatchedPokemons component for your catched Pokemons and list them
  - be creative! I would wrap every catched Pokemon in a pokeball

## Requirements
- use React’s **Context API**
- create a new **feature branch** and commit every change to your Github repo
##

<br />
<br />
<br />
<br />
##### [Pokedex](https://www.pokemon.com/us/pokedex/)
