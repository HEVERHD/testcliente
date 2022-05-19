import React from 'react';

const CompanyForm = () => {
	return (
		<div className='row'>
			<div className='col-sm12 col-md-6 col-lg-4 col-xl-3'>
				<h1> Gestion the companys</h1>
				<div className='card'>
					<div className='card-body'>
						<form>
							<div className='form-group'>
								<input
									type='number'
									id='numNit'
									name='numNit'
									className='form-control'
									placeholder='Nit'
									value='789'
									minlength='10'
									maxlength='10'
									required
								/>
							</div>
							<div className='form-group'>
								<input
									type='text'
									id='txtName'
									name='txtName'
									className='form-control'
									placeholder='Name'
									max='50'
									required
								/>
							</div>
							<div className='form-group'>
								<input
									type='text'
									id='txtDescription'
									name='txtDescription'
									className='form-control'
									placeholder='Description'
									required
								/>
							</div>
							<div className='form-group'>
								<input
									type='text'
									id='txtAddress'
									name='txtAddress'
									className='form-control'
									placeholder='Address'
									max='50'
									required
								/>
							</div>
							<div className='form-group'>
								<input
									type='number'
									id='numPhone'
									name='numPhone'
									className='form-control'
									placeholder='Phone'
									minlength='10'
									required
								/>
								<button
									type='submit'
									className='btn btn-success-block text-bg-dark'
								>
									{' '}
									Create
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CompanyForm;
