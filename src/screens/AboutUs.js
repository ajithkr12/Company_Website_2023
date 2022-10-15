
import React from 'react';

import About from '../images/about/about-image.png';
const AboutUs = () =>  {

  return (
 
    <section className="about section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-12">
                    <div className="image">
                        <img src={About} alt="#"/>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="content">
                        <h4>DECENTRALISED ECONOMY</h4>
                        <h2>We’ve built a platform to buy and sell shares.</h2>
                        <p>Spend real fights effective anything extra by leading. Mouthwatering leading how real formula
                            also locked-in have can mountain thought. Jumbo plus shine sale.</p>
                        <div className="list">
                            <div className="single-list">
                                <div className="list-icon">
                                    <i className="bi bi-check2-all"></i>
                                </div>
                                <h4>Modular structure</h4>
                                <p>Quis autem vel eum reprehenderit</p>
                            </div>
                            <div className="single-list">
                                <div className="list-icon">
                                    <i className="bi bi-check2-all"></i>
                                </div>
                                <h4>Advanced payment</h4>
                                <p>Quis autem vel eum reprehenderit</p>
                            </div>
                            <div className="single-list">
                                <div className="list-icon">
                                    <i className="bi bi-check2-all"></i>
                                </div>
                                <h4>Mining Service</h4>
                                <p>Quis autem vel eum reprehenderit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  );}


export default AboutUs;