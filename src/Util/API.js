import axios from "axios";

const base = "";

const jsonHeader = {"Content-Type":"application/json"}
const xformHeader = {"Content-Type": "application/x-www-form-urlencoded"}


function req(method, uri, route, headers, params) {
	if(headers === xformHeader) {
		let paramsL = new URLSearchParams(Object.entries(params)).toString();
		params = paramsL;
	};

	var config = {
		method: method,
		url: uri+route,
		headers: headers,
		data : params
	};

	return axios(config)
};

// CREATE REQUEST 
export const getUserData = async (username) => {
	let resp = req(
		"post", 
		base, 
		"/api/route", 
		jsonHeader, 
		{
			"username": username,
		}
	);

	return resp;
}