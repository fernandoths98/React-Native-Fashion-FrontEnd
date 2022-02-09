import axios from "axios";


export const instance = axios.create({
    baseURL: 'http://192.168.0.8:3000/api/',
    headers: {
        'Content-Type': 'application/json'}
  });