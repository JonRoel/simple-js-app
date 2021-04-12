let pokemonList = [];

pokemonList = [
   // Bulbasaur
   {
     // Index Number
     pokedexNum: 1,
     // Pokemon Name
     name:'Bulbasaur',
     // Pokemon Type
     types: ['Grass', 'Poison'],
     // Height in m
     height: 0.7,
     //Weight in KG
     weight: 6.9,
     // Biological type
     biology: 'Seed Pokemon',
     // Description
     description: 'For some time after its birth, it grows by gaining nourishment from the seed on its back.',
   },
   // Ivysaur
   {
   pokedexNum: 2,
   name:'Ivysaur',
   types: ['Grass', 'Poison'],
   height: 1,
   weight: 13,
   biology: 'Seed Pokemon',
   description: 'When the bud on its back starts swelling, a sweet aroma wafts to indicate the flowers coming bloom.',
 },
   // Venusaur
   {
     pokedexNum: 3,
     name:'Venusaur',
     types: ['Grass', 'Poison'],
     height: 2,
     weight: 100,
     biology: 'Seed Pokemon',
     description: 'After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon.',
   },
    // Charmander
    {
     pokedexNum: 4,
     name:'Charmander',
     types: ['Fire'],
     height: 0.6,
     weight: 8.5,
     biology: 'Lizard Pokemon',
     description: 'The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely.',
   },
   // Charmeleon
   {
     pokedexNum: 5,
     name:'Charmeleon',
     types: ['Fire'],
     height: 1.1,
     weight: 19,
     biology: 'Lizard Pokemon',
     description: 'In the rocky mountains where Charmeleon live, their fiery tails shine at night like stars.',
   },
   // Charizard
   {
     pokedexNum: 6,
     name:'Charizard',
     types: ['Fire', 'Flying'],
     height: 1.7,
     weight: 90.5,
     biology: 'Flame Pokemon',
     description: 'It is said that Charizards fire burns hotter if it has experienced harsh battles.',
   },
   // Squirtle
   {
     pokedexNum: 7,
     name:'Squirtle',
     types: ['Water'],
     height: 0.5,
     weight: 9,
     biology: 'Young Turtle Pokemon',
     description: 'It shelters itself in its shell then strikes back with spouts of water at every opportunity.',
   },
   // Wartortle
   {
     pokedexNum: 8,
     name:'Wartortle',
     types: ['Water'],
     height: 1,
     weight: 22.5,
     biology: 'Turtle Pokemon',
     description: 'It is said to live 10,000 years. Its furry tail is popular as a symbol of longevity.',
   },
   // Blastoise
   {
     pokedexNum: 9,
     name:'Blastoise',
     types: ['Water'],
     height: 1.6,
     weight: 85.5,
     biology: 'Shell Pokemon',
     description: 'The jets of water it spouts from the rocket cannons on its shell can punch through thick steel.',
   },
 ];
 
function myPokeList(pokemon) {
  document.write(pokemon.name + pokemon.types + pokemon.height);
}
pokemonList.forEach(myPokeList);





// var pokemonRepository = (function() {
//  var pokemonList = [
//   // Bulbasaur
//   {
//     // Index Number
//     pokedexNum: 1,
//     // Pokemon Name
//     name:'Bulbasaur',
//     // Pokemon Type
//     types: ['Grass', 'Poison'],
//     // Height in m
//     height: 0.7,
//     //Weight in KG
//     weight: 6.9,
//     // Biological type
//     biology: 'Seed Pokemon',
//     // Description
//     description: 'For some time after its birth, it grows by gaining nourishment from the seed on its back.',
//   },
//   // Ivysaur
//   {
//   pokedexNum: 2,
//   name:'Ivysaur',
//   types: ['Grass', 'Poison'],
//   height: 1,
//   weight: 13,
//   biology: 'Seed Pokemon',
//   description: 'When the bud on its back starts swelling, a sweet aroma wafts to indicate the flowers coming bloom.',
// },
//   // Venusaur
//   {
//     pokedexNum: 3,
//     name:'Venusaur',
//     types: ['Grass', 'Poison'],
//     height: 2,
//     weight: 100,
//     biology: 'Seed Pokemon',
//     description: 'After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon.',
//   },
//    // Charmander
//    {
//     pokedexNum: 4,
//     name:'Charmander',
//     types: ['Fire'],
//     height: 0.6,
//     weight: 8.5,
//     biology: 'Lizard Pokemon',
//     description: 'The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely.',
//   },
//   // Charmeleon
//   {
//     pokedexNum: 5,
//     name:'Charmeleon',
//     types: ['Fire'],
//     height: 1.1,
//     weight: 19,
//     biology: 'Lizard Pokemon',
//     description: 'In the rocky mountains where Charmeleon live, their fiery tails shine at night like stars.',
//   },
//   // Charizard
//   {
//     pokedexNum: 6,
//     name:'Charizard',
//     types: ['Fire', 'Flying'],
//     height: 1.7,
//     weight: 90.5,
//     biology: 'Flame Pokemon',
//     description: 'It is said that Charizards fire burns hotter if it has experienced harsh battles.',
//   },
//   // Squirtle
//   {
//     pokedexNum: 7,
//     name:'Squirtle',
//     types: ['Water'],
//     height: 0.5,
//     weight: 9,
//     biology: 'Young Turtle Pokemon',
//     description: 'It shelters itself in its shell then strikes back with spouts of water at every opportunity.',
//   },
//   // Wartortle
//   {
//     pokedexNum: 8,
//     name:'Wartortle',
//     types: ['Water'],
//     height: 1,
//     weight: 22.5,
//     biology: 'Turtle Pokemon',
//     description: 'It is said to live 10,000 years. Its furry tail is popular as a symbol of longevity.',
//   },
//   // Blastoise
//   {
//     pokedexNum: 9,
//     name:'Blastoise',
//     types: ['Water'],
//     height: 1.6,
//     weight: 85.5,
//     biology: 'Shell Pokemon',
//     description: 'The jets of water it spouts from the rocket cannons on its shell can punch through thick steel.',
//   },
// ];
//   function getAll() {
//     return pokemonList;
//   }

//   function add(pokemon) {
//     pokemonList.push(pokemon);
//   }

//   return {
//     getAll: getAll,
//     add: add
//   };
// })();

