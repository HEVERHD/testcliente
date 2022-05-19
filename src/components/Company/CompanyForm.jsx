import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';


//conexion API Methods
import * as CompanyServer from './CompanyServer';

//import components
// import {AiFillPhone} from 'react-icons/ai';

const CompanyForm = () => {
	const navigate = Navigate();
	const initialState = { nit: '789', name: '', phone: '', address: '' };
	const [companies, setCompanies] = useState(initialState);
	const handleInputChange = (e) => {
		// console.log(e.target.value);
		// console.log(e.target.name);
		setCompanies({ ...companies, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let res;
			res = await CompanyServer.registerCompany(companies);
			const data = await res.json();
			if (data.status === 200) {
				setCompanies(initialState);
			} navigate.push('/companies');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='col-m3 mx-auto'>
			<h2 className='mb-3 text-center'> Creating Company </h2>
			<form onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label className='form-label'>Nit code</label>
					<input
						type='number'
						name='nit'
						value={companies.nit}
						onChange={handleInputChange}
						className='form-control'
						maxLength='10'
						minLength='9'
						autoFocus
						required
						placeholder='78964512'
					/>
				</div>
				<div className='mb-3'>
					<label className='form-label'>Name</label>
					<input
						type='text'
						name='name'
						value={companies.name}
						onChange={handleInputChange}
						className='form-control'
						maxLength='50'
						autoFocus
						required
						placeholder='Company name'
					/>
				</div>
				<div className='mb-3'>
					<label className='form-label'>Address</label>
					<input
						type='text'
						name='address'
						value={companies.address}
						onChange={handleInputChange}
						className='form-control'
						minLength='1'
						maxLength='50'
						autoFocus
						required
						placeholder='Av. Siempre Viva #123'
					/>
				</div>
				<div className='mb-3'>
					<label className='form-label'>Description company</label>
					<input
						type='text'
						name='description'
						value={companies.description}
						onChange={handleInputChange}
						className='form-control'
						minLength='30'
						maxLength='500'
						autoFocus
						required
						placeholder='We are a company that sells ...'
					/>
				</div>
				<div className='mb-3'>
					<label className='form-label'> Phone</label>
					<input
						type='text'
						name='phone'
						value={companies.phone}
						onChange={handleInputChange}
						className='form-control'
						minLength='9'
						maxLength='10'
						autoFocus
						required
						placeholder='Example: Av. Siempre Viva #123'
					/>
				</div>
				<div className='d-grid gap-2'>
					<button className='btn btn-primary'>Save</button>
				</div>
			</form>
		</div>
	);
};

export default CompanyForm;
