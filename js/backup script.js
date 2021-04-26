var pokemonRepo = (function () {
 var pokemonList = [];
  
 // Loads API url
  
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=248';
  
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
    // Used to get index to allow loading of sprites
  //   function getAllIndexes(arr, val) {
  //     var indexes = [], i = -1;
  //     while ((i = arr.indexOf(val, i+1)) != -1){
  //         indexes.push(i);
  //     }
  //     return indexes;
  // }
  
  // var indexes = getAllIndexes(pokemonList);

    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item, index) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`,
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
          })
          .then(function (details) {
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
          item.weight = details.weight;
          item.abilities = details.abilities;
        }).catch(function (e) {
        console.error(e);
        });
      }

    // Show Details

    function showDetails(pokemon) {
      pokemonRepo.loadDetails(pokemon).then(function () {
      showModal(pokemon);
      console.log(pokemon);
      });
    }

    let modalContainer = document.querySelector('#modal-container');

    function showModal(pokemon) {
    
      modalContainer.innerHTML = '';
        
      let modal = document.createElement('div');
      modal.classList.add('modal');

      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerHTML = `<img width="30px" height="30px" src="img/close-icon.png">` ;
      closeButtonElement.addEventListener('click', hideModal);

      //Get the pokemon name
      let nameElement = document.createElement('h2');
        nameElement.innerText = pokemon.name;

      //get the Image
      let imageElement = document.createElement('img');
        imageElement.setAttribute('src', pokemon.imageUrl);
        imageElement.classList.add('pokemon-image');

      //get the height of the pokemon
      let heightElement = document.createElement('p');
        heightElement.innerText = 'Height ' + pokemon.height;
      
      //get the weight of the pokemon
      let weightElement = document.createElement('p');
        weightElement.innerText = 'Weight ' + pokemon.weight;

      // get the Type of each pokemon, these are objects with the arrays
      let typesDiv = document.createElement('div');
        typesDiv.classList.add('type-wrapper');
      
        pokemon.types.forEach((type) => {
        let typesElement = document.createElement('div');
        let typesText = document.createElement('p');
        typesText.innerText = type.type.name;
  
        typesElement.classList.add('type');
        typesElement.classList.add(type.type.name);
        typesElement.appendChild(typesText);
        typesDiv.appendChild(typesElement);
      });

      modal.appendChild(closeButtonElement);
      modal.appendChild(imageElement);
      modal.appendChild(nameElement);
      modal.appendChild(typesDiv); 
      modal.appendChild(heightElement);
      modal.appendChild(weightElement);
      modalContainer.appendChild(modal);
      
      modalContainer.classList.add('is-visible');

  }

function hideModal() {
  let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
 }
 
 window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();  
  }
});

modalContainer.addEventListener('click', (e) => {
  // We only want to close if the user clicks directly on the overlay
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});

// document.querySelector('#show-modal').addEventListener('click', () => {
//   showModal();
// });


// END OF MODAL


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
  pokemonRepo.getAll().forEach(function(pokemon) {
    pokemonRepo.addListItem(pokemon);
  })
});