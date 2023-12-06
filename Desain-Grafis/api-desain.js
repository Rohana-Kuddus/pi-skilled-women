
// Api
const getJob = async (id) => {
  const api = `https://65687b5f9927836bd974e7bb.mockapi.io/api/v1/jobs/${id}`;

  const raw = await fetch(api);
  const data = await raw.json();
  return data;
};

const showData = async () => {
  const desain = await getJob('1');

  const title = document.getElementById('job-title');
  const hero = document.getElementById('hero-img');

  title.innerHTML = desain.title;
  hero.src = desain.image;
  hero.alt = desain.title.slice(6, desain.title.length - 4);
};

showData();