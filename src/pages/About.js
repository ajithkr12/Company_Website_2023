import React from 'react';
import Hero from '../screens/Hero';
import Feature from '../screens/Feature'
import Team from '../screens/Team';
import Testimonials from '../screens/Testimonials';
import Footer from '../componets/Footer'
import Blogs from '../screens/Blogs';
import Breadcrumbs from '../componets/Breadcrumbs'

import AboutUs from '../screens/AboutUs';
import Mission from '../screens/Mission';

const About = () =>  {

  return (
    <div className="">

        <Breadcrumbs tittle='About Us'/>
        <AboutUs/>
        <Mission/>
        <Team/>
        <Footer/>
    </div>

  );}


export default About;