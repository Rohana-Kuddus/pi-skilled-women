function openOffcanvas() {
  var offcanvas = document.getElementById('offcanvasRight');
  var offcanvasBS = new bootstrap.Offcanvas(offcanvas);
  offcanvasBS.show();
}

document.getElementById('sidebarTrigger').addEventListener('click', openOffcanvas);


// Api
const getJob = async (id) => {
  const api = `https://65687b5f9927836bd974e7bb.mockapi.io/api/v1/jobs/${id}`;

  const raw = await fetch(api);
  const data = await raw.json();
  return data;
};

const getDetail = async (id) => {
  const api = `https://65695a6ade53105b0dd6ef91.mockapi.io/jobs/details/${id}`;
  
  const raw = await fetch(api);
  const data = await raw.json();
  return data;
};

const getkelasHidroponik = async (id) => {
  const api =`https://65702b3609586eff6640d32c.mockapi.io/kelas-hidroponik/${id}`;

  const raw = await fetch(api);
  const data = await raw.json();
  return data;
};

const showData = async () => {
  // get data by id
  // const params = new URLSearchParams(window.location.search);
  // const id = params.get('id');
  const id = '2';
  // const job = await getJob(id);
  // const detail = await getDetail(id);
  const hidroponik = await getkelasHidroponik(id);

  console.log(hidroponik);
  // const title = document.getElementById('job-title');
  // title.innerHTML = job.title;

  // const img = document.getElementById('hero-img');
  // img.src = job.image;
  // img.alt = job.title.slice(6, job.title.length - 4);

  // const penjelasan = document.getElementById('roadmap');
  // penjelasan.innerHTML = job.description;
};

showData();