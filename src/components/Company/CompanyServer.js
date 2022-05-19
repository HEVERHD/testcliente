const API_URL = 'https://apidjango.onrender.com/companies';
const CREATE_COMPANY = 'https://apidjango.onrender.com/companies/create';
const DELETE_URL = 'https://apidjango.onrender.com/companies/delete/';

//lista de empresas

export const ListCompanies = async () => {
	return await fetch(API_URL);
};

//Obtenemos una empresa en especifico

export const getCompany = async (companyid) => {
	return await fetch(`${API_URL}${companyid}`);
};

//Crear una empresa

export const registerCompany = async (newCompany) => {
	return await fetch(`${CREATE_COMPANY}${newCompany}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			nit: parseInt(newCompany.nit),
			name: String(newCompany.name).trim(),
			address: String(newCompany.address).trim(),
			description: String(newCompany.description).trim(),
			phone: parseInt(newCompany.phone),
		}),
	});
};

//Eliminar una empresa

export const deleteCompany = async (companyid) => {
	return await fetch(`${DELETE_URL}${companyid}`, {
		method: 'DELETE',
	});
};
