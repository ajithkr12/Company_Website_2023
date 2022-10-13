
import React from 'react';
import BlogCard from '../componets/BlogCard';
import ScreenHeading from '../componets/ScreenHeading';

const Clients = () =>  {

  return (
 
    <div className="client-logo">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-12 text-center">
                    <div className="single-logo">
                        <img src="assets/images/client-logo/google-logo.png" alt="#"/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12 text-center">
                    <div className="single-logo">
                        <img src="assets/images/client-logo/adani-logo.png" alt="#"/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12 text-center">
                    <div className="single-logo">
                        <img src="assets/images/client-logo/google-logo.png" alt="#"/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12 text-center">
                    <div className="single-logo">
                        <img src="assets/images/client-logo/adani-logo.png" alt="#"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );}


export default Clients;