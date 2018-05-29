import axios from 'axios';
import * as config from './../constants/config';

export default function callApi(method, body) {
	return axios({
		method:method,
		url:`${config.API_URL}`,
		data:body
	}).catch(err =>{
		console.log(err);
	})
}