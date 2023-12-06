
// Api

const getkelasHidroponik = async (id) => {
  const api =`https://65702b3609586eff6640d32c.mockapi.io/kelas-hidroponik/${id}`;

  const raw = await fetch(api);
  const data = await raw.json();
  return data;
};

const showData = async () => {

  const id = '2';
  const hidroponik = await getkelasHidroponik(id);

  console.log(hidroponik);

};

showData();