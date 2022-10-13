
import React from 'react';
import TestimonialCard from '../componets/TestimonialCard';
import ScreenHeading from '../componets/ScreenHeading';
import {TestData} from "../data/Data";

const Testimonials = () =>  {

  return (
 
    <section className="testimonials style2 section">
        <div className="container">
            <ScreenHeading sTittle='Customer Reviews' bTittle='Our Testimonials' description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'/>

            <div className="row testimonial-slider">
              {
                TestData.map((data) => {
                  return (
                    <TestimonialCard data={data}/>
                  )})
              }
            </div>
        </div>
    </section>
   

  );}


export default Testimonials;