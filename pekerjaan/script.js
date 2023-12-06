// GLOBAL
// functions to make the values of innerHTML are reusable
function cardBigScreen(job) {
  return `
         <div class="col-auto mb-4 col-card" data-id="${job.tagId}">
         <div class="card rounded-4 h-100 d-flex flex-fill">
           <!-- card image -->
           <div class="text-center"> 
             <img src="${job.image}" class="card-img-top img-fit-content rounded-top-4" alt="course-image">
           </div>
           <!-- card body -->
           <div class="card-body flex-fill h-100">
             <div class="tags-section align-items-center mb-2" style="width: fit-content; display: flex;">
               <div class="col">
                <h5 class="tag-heading card-title paragraph-dark" style="padding-right: 10px; text-align: center;">
                   ${job.tagId}
                </h5>
               </div>
               <div class="tags text-start col">
                <ul>
                   <li><span>${job.tagId}</span></li>
                </ul>
               </div>
             </div>
             <!-- card content -->
             <h3 class="heading3-dark">${job.title}</h3>
             <p class="card-text" style="display: flex; height: fit-content; font-size: large;">${job.description}</p>
             <!-- card button -->
             <div class="text-center">
               <a href="./job-detail-intro/jobdetailintro.html?id=${id}" class="btn btn-primary-green w-100">Lihat Detail</a>
             </div>
           </div>
         </div>
      </div>
      `;
}
function cardSmallScreen(job) {
  return `
      <div class="col-auto mb-2 col-card" data-id="${job.tagId}">
      <a href="./job-detail-intro/jobdetailintro.html?id=${id}" style="text-decoration:none;">
        <div class="card rounded-4 h-100">
          <!-- card body -->
          <div class="card-body flex-fill h-100">
            <div class="tags-section align-items-center mb-2" style="width: fit-content; display: flex;">
              <div class="col">
                <h5 class="tag-heading card-title paragraph-dark" style="padding-right: 10px; text-align: center;">
                ${job.tagId}</h5>
              </div>
              <div class="tags text-start col">
                <ul>
                  <li><span>${job.tagId}</span></li>
                </ul>
              </div>
            </div>
            <!-- card content -->
            <h3 class="heading3-dark">${job.title}</h3>
            <p class="card-text">${job.description}</p>
          </div>
        </div>
      </a>
     </div>
    </div>`;
}

// declare variables and fetch API
let jobData;
const screen = window.matchMedia('(max-width: 425px)');
const searchInput = document.getElementById("search-input");
const container = document.getElementById("card-pekerjaan-container");

///////////////////////////////////////////////////////////////////////

// async function to fetch data from API
async function fetchData(URL) {
  try {
    const resp = await fetch(URL);
    const data = await resp.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

// fetch API and show cards after page loads 
window.onload = async () => {
  jobData = await fetchData("https://65687b5f9927836bd974e7bb.mockapi.io/api/v1/jobs");

  // change card design based on screen size
  if (screen.matches) {
    // mobile view
    container.innerHTML = jobData.map(cardSmallScreen).join('');
  }
  // desktop-tablet view
  else {
    container.innerHTML = jobData.map(cardBigScreen).join('');
  }
};

// update data and add search + dropdown functions
async function updateData() {

  // change card design based on screen size
  window.addEventListener('resize', () => {
    // mobile view
    if (screen.matches) {
      container.innerHTML = jobData.map(cardSmallScreen).join('');
    }
    // desktop-tablet view
    else {
      container.innerHTML = jobData.map(cardBigScreen).join('');
    }
  });

  // SEARCH
  searchInput.addEventListener('input', (element) => {
    const searchKeyword = element.target.value.toLowerCase();
    const searchJobs = jobData.filter((job) => {
      return job.title.toLowerCase().includes(searchKeyword) || job.tagId.toLowerCase().includes(searchKeyword);
    });
    // mobile view
    if (screen.matches) {
      container.innerHTML = searchJobs.map(cardSmallScreen).join('');
    } else {
      // desktop-tablet view
      container.innerHTML = searchJobs.map(cardBigScreen).join('');
    }
  })

  // DROPDOWN
  const dropdownField = document.getElementById("dropdown-field");
  dropdownField.addEventListener("click", (event) => {
    document.getElementById("dropdown-button").textContent = event.target.textContent;
    dropdownFilter();
  });

  function dropdownFilter() {
    const dropdownButton = document.getElementById("dropdown-button");
    const card = container.getElementsByClassName("col-card");
    let dropdownTagId = dropdownButton.textContent;
    if (dropdownTagId === "Bisnis & Marketing") {
      dropdownTagId = "Bisnis";
    }
    
    for (let i = 0; i < card.length; i++) {
      let tagId = card[i].getAttribute("data-id");
      if (tagId === dropdownTagId) {
        card[i].style.display = "";
      } else {
        card[i].style.display = "none";
      }
    }
  }
}

updateData();