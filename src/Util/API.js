import axios from 'axios';

const firebase = 'https://us-central1-lions-services-data-collection.cloudfunctions.net/app';
const local = 'http://127.0.0.1:3001';
const noahs_laptops = 'http://192.168.1.119:3001'
const base = noahs_laptops

//GET Request
export const axiosGet = async (route) => {
	const resp = await axios.get(`${base}/${route}`);
	return resp;
}

//POST Request
export const axiosPost = async (data, route) => {
	const resp = await axios.post(`${base}/${route}`, data);
	return resp;
}