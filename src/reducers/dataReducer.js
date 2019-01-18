import { GET_DATA } from '../actions/types';

const initialState = {
	data: []
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_DATA:
			const data = {};

			action.payload.map((city) => {
				const { uspto_tm_document } = city;
				const { trademark_case_files } = uspto_tm_document;
				const base_application_form = trademark_case_files.trademark_case_file.base_application_form;

				if(!(Object.keys(base_application_form.case_file_owners).length > 1)) {
					const companyInfo = base_application_form.case_file_owners.case_file_owner;
					const { country_name, name } = companyInfo;

					if(data[country_name]) {
						data[country_name] = data[country_name] + ', ' + name;
					} else {
						data[country_name] = name;
					}
				}
			});

			return {
				...state,
				data,
			};
		default:
			return state;
	}
}
