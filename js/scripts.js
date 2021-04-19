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
    // Used to get index to allow loading of sprites
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
      pokemonRepo.loadDetails(item).then(function showModal (item) {

          // Clear Modal Content
          modalContainer.innerHTML = '';
        
          let modal = document.createElement('div');
          modal.classList.add('modal');
        
          // Add modal content
        
          // Close Button
          let closeButtonElement = document.createElement('button');
          closeButtonElement.classList.add('modal-close');
          closeButtonElement.innerHTML = `<img width="30px" height="30px" src="img/close-icon.png">` ;
          closeButtonElement.addEventListener('click', hideModal);
        
          // Image 
          let imageElement = document.createElement('img');
              imageElement.innerText = item.name;

          // Title
          let nameElement = document.createElement('h1');
          nameElement.innerText = item;
        
          // Paragraph Content
          let heightElement = document.createElement('p');
              heightElement.innerText = item;
        
          // Append Elements to modal-container
          modal.appendChild(closeButtonElement);
          modal.appendChild(imageElement)
          modal.appendChild(nameElement);
          modal.appendChild(heightElement);
          modalContainer.appendChild(modal);
        
          modalContainer.classList.add('is-visible');
      });
      console.log(item);
    }

// Modal Show - Hide Function ---------------------------------------

let modalContainer = document.querySelector('#modal-container');

// function showModal(title, text){

//   // Clear Modal Content
//   modalContainer.innerHTML = '';

//   let modal = document.createElement('div');
//   modal.classList.add('modal');

//   // Add modal content

//   // Close Button
//   let closeButtonElement = document.createElement('button');
//   closeButtonElement.classList.add('modal-close');
//   closeButtonElement.innerHTML = `<img width="30px" height="30px" src="img/close-icon.png">` ;
//   closeButtonElement.addEventListener('click', hideModal);

//   // Title
//   let titleElement = document.createElement('h1');
//   titleElement.innerText = title;

//   // Paragraph Content
//   let contentElement = document.createElement('p');
//       contentElement.innerText = text;

//   // Append Elements to modal-container
//   modal.appendChild(closeButtonElement);
//   modal.appendChild(titleElement);
//   modal.appendChild(contentElement);
//   modalContainer.appendChild(modal);

//   modalContainer.classList.add('is-visible');
// }

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

document.querySelector('#show-modal').addEventListener('click', () => {
  showModal();
});


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
  pokemonRepo.getAll().forEach(function(pokemon, index) {
    pokemonRepo.addListItem(pokemon, index);
  })
});




