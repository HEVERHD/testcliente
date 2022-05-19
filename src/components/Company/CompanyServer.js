const API_URL = 'https://apidjango.onrender.com/companies';
const CREATE_COMPANY_URL = "https://apidjango.onrender.com/companies/create";	
export const ListCompanies = async () => {
	return await fetch(API_URL);
};

export const registerCompany = async (newCompany) => {
	return await fetch(CREATE_COMPANY_URL, {
		method: 'POST',
		
	headers: {
		'Content-Type': 'application/json',
	}
	});
};




