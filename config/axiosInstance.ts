import axios from "axios";

export const baseURL = `/api/`;

const instance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

export default instance;
