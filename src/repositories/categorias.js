import URL from '../config';

const URL_CATEGORIES = `${URL}categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const res = await response.json();
        return res;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

function getAll() {
  return fetch(URL_CATEGORIES)
    .then(async (response) => {
      if (response.ok) {
        const res = await response.json();
        return res;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
