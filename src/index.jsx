import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

//Components
import CompanyList from './components/Company/CompanyList';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompanyForm from './components/Company/CompanyForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
		<div className='container my-4'>
      <Routes>
      <Route path='/' element={<CompanyList />} />
      <Route path='/companyForm' element ={<CompanyForm />} />
    
      </Routes>
		</div>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
