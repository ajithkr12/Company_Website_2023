
import React from 'react';
import FeatureCard from '../componets/FeatureCard';
import ScreenHeading from '../componets/ScreenHeading';
import {ServiceData} from "../data/Data";


const Feature = () =>  {

  return (
 
    <div className="feature section animate__animated animate__fadeInLeft">
        <div className="container">
            <ScreenHeading sTittle='Why choose us' bTittle='Our features' description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'/>
            <div className="row abc">
            {
              ServiceData.map((data) => {
                return (
                <FeatureCard data={data}/>
                )})
            }

            </div>
        </div>
    </div>
   

  );}


export default Feature;