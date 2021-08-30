import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.thecoffeehouse.com/',
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});

export const getMenu = () => instance.get('api/v2/menu')
