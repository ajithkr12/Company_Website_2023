
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import TestimonialCard from '../componets/TestimonialCard';
import ScreenHeading from '../componets/ScreenHeading';
import {TestData} from "../data/Data";

const Testimonials = () =>  {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
 
    <section className="testimonials style2 section animate__animated animate__fadeInRight">
        <div className="container">
            <ScreenHeading sTittle='Customer Reviews' bTittle='Our Testimonials' description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'/>
            <Slider {...settings}>

              {
                TestData.map((data) => {
                  return (
                    <TestimonialCard data={data}/>
                  )})
              }
        
            </Slider>
        </div>
    </section>
   

  );}


export default Testimonials;