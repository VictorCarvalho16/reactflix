import URL from '../config';

const URL_VIDEOS = `${URL}videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (response) => {
      if (response.ok) {
        const res = await response.json();
        return res;
      }
      throw new Error('Não foi possível cadastrar os dados');
    });
}

export default {
  create,
};
