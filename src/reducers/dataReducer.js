import { GET_DATA } from '../actions/types';

const initialState = {
	data: []
};

export default function (state = initialState, action) {
	console.log(action.payload)
	switch (action.type) {
		case GET_DATA:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
}
