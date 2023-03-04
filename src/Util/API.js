import axios from 'axios';

const base = 'https://us-central1-lions-services-data-collection.cloudfunctions.net/app';

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



