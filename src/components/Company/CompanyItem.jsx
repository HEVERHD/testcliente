import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as CompanyServer from './CompanyServer';

const CompanyItem = (props, ListCompanies) => {
	const navigate = useNavigate();
	const params = useParams();
	console.log(params);

	const handleDelete = async (companyid) => {
		await CompanyServer.deleteCompany(companyid);
		props.ListCompanies();
	};

	return (
		<div className='col-md-4 mb-4'>
			<div className='card card-body'>
				<h4 className='card-title'>{props.company.name}</h4>
				<p className='card-text'>{props.company.description}</p>
				<p className='card-text'>
					Nit/cc : <strong>{props.company.nit}</strong>
				</p>
				<p className='card-text'>
					Number phone : <strong>{props.company.phone}</strong>
				</p>
				<p className='card-text'>
					About : <strong>{props.company.address}</strong>
				</p>
				<button
					className='btn btn-primary'
					onClick={() => navigate(`/updateCompany/${props.company.nit}`)}
				>
					Update company
				</button>
				<button
					onClick={() => props.company.nit && handleDelete(props.company.nit)}
					className='btn btn-danger my-2'
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default CompanyItem;
