import axios from 'axios';

//Base URL > https://sujeitoprogramador.com/

const api = axios.create({
  baseURL: 'https://sujeitoprogramador.com'
});

export default api;