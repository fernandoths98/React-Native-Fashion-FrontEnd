import axios from "axios";


export const instance = axios.create({
    baseURL: 'http://192.168.100.11:3000/api/',
    headers: {
        'Content-Type': 'application/json'}
  });