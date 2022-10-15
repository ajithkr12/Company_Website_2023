
import React from 'react';

const Breadcrumbs = (props) =>  {
  return (
    <div className="breadcrumbs">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                    <div className="breadcrumbs-content">
                        <h1 className="page-title">{props.tittle}</h1>
                        <ul className="breadcrumb-nav">
                            <li>Home</li>
                            <li><i className="bi bi-chevron-right" width="32" height="32"></i></li>
                            <li>{props.page}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>  
  );}
export default Breadcrumbs;