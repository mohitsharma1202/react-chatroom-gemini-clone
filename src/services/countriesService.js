import axios from 'axios';
export const fetchCountries = () => {
  return axios.get('https://restcountries.com/v3.1/all?fields=name,idd,cca2,flags');
};
