const API_URL = 'http://127.0.0.1:8000/companies';
const CREATE_COMPANY = 'http://127.0.0.1:8000/companies/create';
const DELETE_URL = 'http://127.0.0.1:8000/companies/delete/';

//lista de empresas

export const ListCompanies = async () => {
	return await fetch(API_URL);
};

//Obtenemos una empresa en especifico

export const getCompany = async (companyid) => {
	return await fetch(`${API_URL}/${companyid}`);
};

//Crear una empresa

export const registerCompany = async (newCompany) => {
	return await fetch(`${CREATE_COMPANY}`, {
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

// Actualizar una empresa

export const updateCompany = async (companyid, updateCompany) => {
	return await fetch(`${API_URL}/edit/${companyid}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			nit: parseInt(updateCompany.nit),
			name: String(updateCompany.name).trim(),
			address: String(updateCompany.address).trim(),
			description: String(updateCompany.description).trim(),
			phone: parseInt(updateCompany.phone),
		}),
	});
};

//Eliminar una empresa

export const deleteCompany = async (companyid) => {
	return await fetch(`${DELETE_URL}${companyid}`, {
		method: 'DELETE',
	});
};
