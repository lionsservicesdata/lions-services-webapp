import axios from 'axios';

const local = 'http://127.0.0.1:3001';
const ricardos_laptops = 'http://192.168.1.145:3001'
const base = ricardos_laptops

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