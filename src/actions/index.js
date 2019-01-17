import axios from 'axios';
import { GET_DATA } from './types';

export const getData = () => dispatch => {
	axios.get('https://developer.uspto.gov/ibd-api/v1/trademark/documents')
		.then(res => dispatch({
			type: GET_DATA,
			payload: res.data.response.docs
		}))
		.catch(err => {console.log(err)})
};

