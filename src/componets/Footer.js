
import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () =>  {

  return (
 
    <footer className="footer section">
        <div className="footer-top">
            <div className="container">
                <div className="inner-content">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-footer f-about">
                                <div className="logo">
                                    <Link to="/">
                                        <img src="assets/images/logo/white-logo.png" alt="#"/>
                                    </Link>
                                </div>
                                <p>Making the world a better place through constructing elegant hierarchies.</p>
                                <h4 className="social-title">Follow Us On:</h4>
                                <ul className="social">
                                    <li><a href="https://www.tinqbit.com/"><i className="bi bi-facebook"></i></a></li>
                                    <li><a href="https://www.tinqbit.com/"><i className="bi bi-instagram"></i></a></li>
                                    <li><a href="https://www.tinqbit.com/"><i className="bi bi-twitter"></i></a></li>
                                    <li><a href="https://www.tinqbit.com/"><i className="bi bi-linkedin"></i></a></li>
                                    <li><a href="https://www.tinqbit.com/"><i className="bi bi-youtube"></i></a></li>
                                </ul>
                            </div>
                           
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <div className="single-footer f-link">
                                <h3>Solutions</h3>
                                <ul>
                                    <li><a href="">Marketing</a></li>
                                    <li><a href="">Analytics</a></li>
                                    <li><a href="">Commerce</a></li>
                                    <li><a href="">Insights</a></li>
                                </ul>
                            </div>
                           
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <div className="single-footer f-link">
                                <h3>Support</h3>
                                <ul>
                                    <li><a href="">Pricing</a></li>
                                    <li><a href="">Documentation</a></li>
                                    <li><a href="">Guides</a></li>
                                    <li><a href="">API Status</a></li>
                                </ul>
                            </div>
                           
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                           
                            <div className="single-footer newsletter">
                                <h3>Subscribe</h3>
                                <p>Subscribe to our newsletter for the latest updates</p>
                                <form action="#" method="get" target="_blank" className="newsletter-form">
                                    <input name="EMAIL" placeholder="Email address" required="required" type="email"/>
                                    <div className="button">
                                        <button class="sub-btn"><i className="bi bi-envelope"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
        <div className="copyright-area">
            <div className="container">
                <div className="inner-content">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <p className="copyright-text">© 2023 tinQbit - All Rights Reserved</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <p className="copyright-owner">Designed and Developed by <a href="https://www.tinqbit.com/"rel="nofollow" target="_blank">tinQbit</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

  );}


export default Footer;