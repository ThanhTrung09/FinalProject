import axios from 'axios'


const instance = axios.create({
  baseURL: 'https://api.thecoffeehouse.com/api/',
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});
//https://api.thecoffeehouse.com/api/verify_mobile
export const getMenu = () => instance.get('v2/menu')
export const Login = (params) => instance.post('verify_mobile', params)
