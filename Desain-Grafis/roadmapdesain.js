// Fungsi untuk membuka offcanvas
function openOffcanvas() {
  var offcanvas = document.getElementById('offcanvasRight');
  var offcanvasBS = new bootstrap.Offcanvas(offcanvas);
  offcanvasBS.show();
}

// Menambahkan event listener pada elemen SVG
document.getElementById('sidebarTrigger').addEventListener('click', openOffcanvas);


// Api
// Fetch Pokémon data from the provided API
fetch('https://pokeapi.deno.dev/pokemon?limit=10')
  .then(response => response.json())
  .then(data => {
    // Access the array of Pokémon objects
    const pokemonArray = data;

    // Get the row container
    const rowContainer = document.getElementById('daftar-kelas');

    // Loop through each Pokémon in the array
    pokemonArray.forEach(pokemon => {
      // Create Bootstrap card for each Pokémon
      const pokemonElement = document.createElement('div');
      pokemonElement.className = 'card mb-3'; // Adjust the column size as needed
      pokemonElement.style.maxWidth = "540px";
      pokemonElement.innerHTML = `
    

      <div class="row g-0">
        <div class="col-md-4">
          <!-- tambahkan gambar -->
          <img src="${pokemon.imageUrl}" class="img-fluid rounded-start" alt="${pokemon.name}">
        </div>

        <div class="col-md-8">
          <!-- deskripsi -->
          <div class="card-body">
            <h5 class="heading3-green">${pokemon.name}</h5>
            <div class="tag">
              <p class="btn-secondary">${pokemon.types}</p>
            </div>
            <p class="text-small-dark">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="row card-buttons">
              <div class="col vote d-flex gap-2">
                  <div class="upvote">
                      <i class="ri-thumb-up-fill"> 58</i>
                  </div>
                  <div class="downvote">
                      <i class="ri-thumb-down-line"> </i>
                  </div>
              </div>
              <div class="col btn-kelas">
                  <button class="btn-primary-green">Lihat Kelas</button>
              </div>
            </div>
          </div>
        </div>

      </div>
  <!-- card end -->

            `;
        console.log(rowContainer.firstElementChild);
      // Append the Pokémon card to the row container
      rowContainer.appendChild(pokemonElement);
    });
  })
  .catch(error => console.error('Error fetching Pokémon data:', error));