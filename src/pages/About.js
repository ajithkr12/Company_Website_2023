import React from 'react';
import Team from '../screens/Team';
import Footer from '../componets/Footer'
import Breadcrumbs from '../componets/Breadcrumbs'

import AboutUs from '../screens/AboutUs';
import Mission from '../screens/Mission';

const About = () =>  {

  return (
    <div className="">

        <Breadcrumbs tittle='About Us' page='About'/>
        <AboutUs/>
        <Mission/>
        <Team/>
        <Footer/>
    </div>

  );}


export default About;