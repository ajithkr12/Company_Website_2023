import React from 'react';
import Hero from '../screens/Hero';
import Feature from '../screens/Feature'
import Team from '../screens/Team';
import Testimonials from '../screens/Testimonials';
import Footer from '../componets/Footer'
import Blogs from '../screens/Blogs';
import Clients from '../screens/Clients';
const Home = () =>  {

  return (
    <div className="">
        <Hero/>
        <Feature/>
        <Testimonials/>
        <Blogs/>
        <Clients/>
        <Footer/>
    </div>

  );}


export default Home;