import React, { useState, useEffect } from 'react';

//components are the building blocks of your application. They represent the smallest pieces of functionality that you can put together to build a real application.
import CompanyItem from './CompanyItem';

import * as CompanyServer from './CompanyServer';

const CompanyList = () => {
	const [companies, setCompanies] = useState([]);

	const ListCompanies = async () => {
		try {
			let response = await CompanyServer.registerCompany(companies);
			const data = await response.json();
			setCompanies(data);
			
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		ListCompanies();
	}, []);

	return (
		<div className='row'>
			{companies.map((company) => (
				<CompanyItem key={company.nit} company={company} />
			))}
		</div>
	);
};
export default CompanyList;
