import axios from 'axios';


const firebase = 'https://us-central1-lions-services-data-collection.cloudfunctions.net/app';
const local = 'http://127.0.0.1:3001';
const home = 'http://10.0.0.130:3001'
const base = local
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



