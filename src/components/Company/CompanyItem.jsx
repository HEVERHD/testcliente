import React from "react";

const CompanyItem=(props)=>{
    return(
        <div className="col-md-4 mb-4">
            <div className="card card-body">
                <h4 className="card-title">{props.company.name}</h4>
                <p className="card-text">{props.company.description}</p>
                <p className="card-text">Nit/cc : <strong>{props.company.nit}</strong></p>
                <p className="card-text">Number phone : <strong>{props.company.phone}</strong></p>
                <p className="card-text">About : <strong>{props.company.address}</strong></p>

            </div>
        </div>

       
    );

};

export default CompanyItem;