
import React from 'react';

import ClientLogo1 from '../images/client-logo/google-logo.png';
import ClientLogo2 from '../images/client-logo/adani-logo.png';
const Clients = () =>  {

  return (
 
    <div className="client-logo">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-12 text-center">
                    <div className="single-logo">
                        <img src={ClientLogo1} alt="#"/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12 text-center">
                    <div className="single-logo">
                        <img src={ClientLogo2} alt="#"/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12 text-center">
                    <div className="single-logo">
                        <img src={ClientLogo1}alt="#"/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12 text-center">
                    <div className="single-logo">
                        <img src={ClientLogo2} alt="#"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );}


export default Clients;