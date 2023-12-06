// Fetch Pokémon data from the provided API
fetch('https://pokeapi.deno.dev/pokemon?limit=10')
  .then(response => response.json())
  .then(data => {
    // Access the array of Pokémon objects
    const pokemonArray = data;

    // Get the row container
    const rowContainer = document.getElementById('slide');

    // Loop through each Pokémon in the array
    pokemonArray.forEach(pokemon => {
      // Create Bootstrap card for each Pokémon
      const pokemonElement = document.createElement('div');
      pokemonElement.className = 'carousel-item'; // Adjust the column size as needed
      pokemonElement.innerHTML = `
        <div class="card">
            <img src="${pokemon.imageUrl}" class="card-img-top" alt="${pokemon.name}">
            <div class="card-body">
            <div class="card-tag d-flex gap-3">
                <h6 class="paragraph-dark">Kreatif</h6>
                <p class="text-smaller-green btn-secondary">${pokemon.types.join(', ')}</p>
            </div class="card-content">
            <h5 class="heading3-dark">${pokemon.name}</h5>
            <p class="paragraph-dark">${pokemon.description}</p>
            <a href="#" class="card-btn d-flex justify-content-center"><button class="btn-primary-green">Lihat Detail</button></a>
            </div>
        </div>
            `;
        
      // Append the Pokémon card to the row container
      rowContainer.appendChild(pokemonElement);
    });
  
    let list = rowContainer.firstElementChild.classList;
    list.add("active");

    let items = document.querySelectorAll('.carousel .carousel-item')
    console.log(items);

    items.forEach((el) => {
      const minPerSlide = 2
      let next = el.nextElementSibling
      for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
    })
  })
  .catch(error => console.error('Error fetching Pokémon data:', error));




