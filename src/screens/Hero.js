
import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () =>  {

  return (
 
    <section className="hero-area">
    <img className="hero-shape" src="assets/images/hero/hero-shape.svg" alt="#"/>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-12">
                <div className="hero-content">
                    <h4 className="">Start Envesting & Earn Money</h4>
                    <h1 className="" >Say goodbye
                        to <br/>idle
                        <span>
                            <img class="text-shape" src="assets/images/hero/text-shape.svg" alt="#"/>
                            money.
                        </span>
                    </h1>
                    <p className="">Invest your spare change in Bitcoin and save
                        with<br/> crypto to e arn interest in real time.
                    </p>
                    <div className="button">
                        <Link to="/about" className="btn">Discover More</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 col-12">
                <div className="hero-image">
                    <img className="main-image" src="assets/images/hero/home2-bg.png" alt="#"/>
                    <img className="h2-move-1" src="assets/images/hero/h2-bit-l.png" alt="#"/>
                    <img className="h2-move-2" src="assets/images/hero/h2-bit-m.png" alt="#"/>
                    <img className="h2-move-3" src="assets/images/hero/h2-bit-s.png" alt="#"/>
                </div>
            </div>
        </div>
    </div>
    </section>
   

  );}


export default Hero;