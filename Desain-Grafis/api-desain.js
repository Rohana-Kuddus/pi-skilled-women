
// Api

const getkelasDesain = async (id) => {
  const api =`https://65702b3609586eff6640d32c.mockapi.io/roadmaprizqi/${id}`;

  const raw = await fetch(api);
  const data = await raw.json();
  return data;
};

const showData = async () => {

  const id = '2';
  const desain = await getkelasDesain(id);

  console.log(desain);

};

showData();