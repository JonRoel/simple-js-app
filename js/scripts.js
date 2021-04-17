var pokemonRepo = (function () {
 var pokemonList = [];
  
 // Loads API url
  
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
  // checks for object and allows addiing to array function
  function add(pokemon) {
    if (typeof pokemon === 'object') {
      pokemonList.push(pokemon);
    } 
  };

  //Gets the entire list from pokemonList Array
  
  function getAll() {
    return pokemonList;
  };

  // Add each item to li

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerHTML = `<img width="44px" class="sprite" style="float:left;" src="${pokemon.imageUrl}"> <p>${pokemon.name}</p>`; 
    button.classList.add('list-button');
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    // Event Listener for button
    button.addEventListener('click', function () {
      showDetails(pokemon)
    });
  }

    // Load API List with Name
    function getAllIndexes(arr, val) {
      var indexes = [], i = -1;
      while ((i = arr.indexOf(val, i+1)) != -1){
          indexes.push(i);
      }
      return indexes;
  }
  
  var indexes = getAllIndexes(pokemonList);

    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${indexes++ +1}.png`,
          };
          add(pokemon);
          //console.log.indexOf(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

    // Load Details of each

    function loadDetails(item) {
      let url = item.detailsUrl;
        return fetch(url).then(function (response) {
        return response.json();
          }).then(function (details) {
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
        console.error(e);
        });
      }

    // logs the pokemonList array to the console

    function showDetails(item) {
      pokemonRepo.loadDetails(item).then(function () {
        console.log(item);
      });
    }

  return {
    showDetails: showDetails,
    addListItem: addListItem,
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };


})();

//console.log(pokemonRepo.getAll());

pokemonRepo.loadList().then(function() {
  pokemonRepo.getAll().forEach(function(pokemon, index) {
    pokemonRepo.addListItem(pokemon, index);
  })
});


