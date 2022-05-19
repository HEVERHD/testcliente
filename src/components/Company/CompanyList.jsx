import React, { useState, useEffect } from 'react';

import * as CompanyServer from './CompanyServer';

const CompanyList = () => {
	const [companies, setCompanies] = useState([]);

	const ListCompanies = async () => {
		try {
			const res = await CompanyServer.ListCompanies();
			const data = await res.json();
			setCompanies(data);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		ListCompanies();
	}, []);

	return (
		<div>
			{companies.map((company) => (
				<h1>{company.name}</h1>
			))}
		</div>
	);
};
export default CompanyList;
