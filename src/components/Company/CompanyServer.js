const API_URL = 'https://apidjango.onrender.com/companies';
const CREATE_COMPANY = 'https://apidjango.onrender.com/companies/create/';
const DELETE_URL = 'https://apidjango.onrender.com/companies/delete/';
export const ListCompanies = async () => {
	return await fetch(API_URL);
};

export const registerCompany = async (create) => {
	return await fetch(CREATE_COMPANY, {
	method: 'POST',	
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		nit: parseInt(create.nit),
		name: String(create.name).trim(),
		address: String(create.address).trim(),
		description: String(create.description).trim(),
		phone: parseInt(create.phone),
	}),
	});
};

export const deleteCompany = async (companyid) => {
	return await fetch(`${DELETE_URL}${companyid}`, {
	method: 'DELETE',	
	});
};


