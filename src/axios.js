import axios from 'axios';

const axiosData = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export default axiosData;
