
import React from 'react';
import {useForm }from "react-hook-form";
const ContactUs = () =>  {
    // const { register, handleSubmit, errors } = useForm();
    const {register,handleSubmit,formState: { errors },} = useForm();

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
                        <form className="form" onSubmit={handleSubmit((data) => console.log(data))}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="form-group">
                                        <input type="text" placeholder="Name" {...register('Name', { required: true,minLength: 2})} />
                                        {errors.Name && errors.Name.type === "required" && <p className="red">Name is required.</p>}
                                        {errors.Name && errors.Name.type === "minLength" && (<p className="red">Your name must be at least 2 characters.</p>)}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="form-group">
                                        <input type="text" placeholder="Email" {...register('email', { required: true,pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})} />
                                        {errors.email && errors.email.type === "required" && <p className="red">Email is required.</p>}
                                        {errors.email && errors.email.type === "pattern" && (<p className="red">Invalid Email Address</p>)}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="form-group">
                                        <input type="text" placeholder="Subject" {...register('subject', { required: true,maxLength:50})} />
                                        {errors.subject && errors.subject.type === "required" && <p className="red">Subject is required.</p>}
                                        {errors.subject && errors.subject.type === "maxLength" && (<p className="red">more content</p>)}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="form-group">
                                        <input type="tel" placeholder="Mobile Number" {...register('Mobile', { required: true,minLength: 6, maxLength: 12})} />
                                        {errors.Mobile && errors.Mobile.type === "required" && <p className="red">Mobile is required.</p>}
                                        {errors.Mobile && errors.Mobile.type === "minLength" && errors.Mobile.type === "maxLength" &&(<p className="red">Invalid Mobile Number</p>)}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="Message" id="message-area"{...register('message', { required: true})}/>
                                        {errors.message && errors.message.type === "required" && <p className="red">Message is required.</p>}
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

