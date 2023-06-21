import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://api.mercadolibre.com/',      
    headers : {  
      "Authorization": 'Bearer 676840df68c9d332ef50e5ab48e75d5e',
    },
    timeout : 1000,  
  });
  
  export default instance;