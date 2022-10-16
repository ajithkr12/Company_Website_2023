
import React from 'react';
import BlogCard from '../componets/BlogCard';
import ScreenHeading from '../componets/ScreenHeading';

const ContactUs = () =>  {

  return (
 
    <div className="contact-us section">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="contact-widget-wrapper">
                        <div className="main-title">
                            <h2>Contact Us</h2>
                            <p>There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered.</p>
                        </div>
                        <div className="contact-widget-block">
                            <h3 className="title">Call us</h3>
                            <p>+919495993895</p>
                        </div>
                        <div className="contact-widget-block">
                            <h3 className="title">Email us</h3>
                            <p>info@tinqbit.com</p>
                            <p>tinqbit@gmail.com</p>
                        </div>
                        <div className="contact-widget-block">
                            <h3 className="title">Our Address</h3>
                            <p>Room No B206</p>
                            <p>Department of EI Building</p>
                            <p>CE kidangoor</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="contact-form">
                        <h3 className="form-title">Leave a message here</h3>
                        <form className="form" method="post" action="">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="form-group">
                                        <input name="name" type="text" placeholder="Name*" required="required"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="form-group">
                                        <input name="email" type="email" placeholder="Email*" required="required"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="form-group">
                                        <input name="subject" type="text" placeholder="Subject*" required="required"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="form-group">
                                        <input name="phone" type="text" placeholder="Phone*" required="required"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea placeholder="Message*" name="message" id="message-area"
                                        className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="button">
                                        <button type="submit" className="btn ">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


   

  );}


export default ContactUs;

