import React, { useState, useEffect } from 'react';

//components are the building blocks of your application. They represent the smallest pieces of functionality that you can put together to build a real application.
import CompanyItem from './CompanyItem';

import * as CompanyServer from './CompanyServer';

const CompanyList = () => {
	const [companies, setCompanies] = useState([]);

	const ListCompanies = async () => {
		try {
			const res = await CompanyServer.ListCompanies();
			const data = await res.json();
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
				<CompanyItem key={company.nit} company={company} ListCompanies={ListCompanies} />
			))}
		</div>
	);
};
export default CompanyList;
