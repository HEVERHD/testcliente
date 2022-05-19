const API_URL = 'https://apidjango.onrender.com/companies';

export const ListCompanies = async () => {
	return await fetch(API_URL);
};
