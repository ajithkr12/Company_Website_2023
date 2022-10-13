import React from 'react';
import Breadcrumbs from '../componets/Breadcrumbs'
import Footer from '../componets/Footer'
import ContactUs from '../screens/ContactUs';
import LocationMap from '../screens/LocationMap';

const Contact = () =>  {

  return (
    <div className="">

        <Breadcrumbs tittle='Contact'/>
        <ContactUs/>
        <LocationMap/>
        <Footer/>

    </div>

  );}


export default Contact;