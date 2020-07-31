export default window.location.hostname.includes('localhost')
  ? 'http://localhost:8080/'
  : 'https://tecflix.herokuapp.com/categorias';
