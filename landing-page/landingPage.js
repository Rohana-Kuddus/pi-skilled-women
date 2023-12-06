// Fetch data from API
fetch('https://65687b5f9927836bd974e7bb.mockapi.io/api/v1/jobs/?')
  .then(response => response.json())
  .then(data => {
    // Access the array of job objects
    const jobsArray = data;
    const jobArray =jobsArray.slice(0, 3);
    console.log(jobArray);

    // Get the row container
    const rowContainer = document.getElementById('slide');

    // Loop through each job in the array
    jobArray.forEach(job => {
      // Create Bootstrap card for each job
      const jobElement = document.createElement('div');
      jobElement.className = 'carousel-item';
      jobElement.innerHTML = `
      <div class="card">
          <img src="${job.image}" class="card-img-top" alt="${job.title}">
          <div class="card-body">
              <div class="card-tag d-flex gap-3">
                  <h6 class="paragraph-dark">${job.tagId}</h6>
                  <p class="text-smaller-green btn-secondary">${job.tagId}</p>
              </div>

              <div class="card-content"> 
                  <h5 class="heading3-dark">${job.title}</h5>
                  <p class="paragraph-dark">${job.description}</p>
                  <a href="./job-detail-intro/jobdetailintro.html?id=${job.id}" class="card-btn d-flex justify-content-center">
                    <button class="btn-primary-green">Lihat Detail</button>
                  </a>
              </div>
            </div>
        </div>
            `;
        
      // Append the jobs card to the row container
      rowContainer.appendChild(jobElement);
    });
  
    //add class active to first card
    let list = rowContainer.firstElementChild.classList;
    list.add("active");

    //carousel
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
  .catch(error => console.error('Error fetching Job data:', error));
