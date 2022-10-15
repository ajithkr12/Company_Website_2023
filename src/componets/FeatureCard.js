import React from 'react';

const FeatureCard = (props) =>  {
  return (
    <div className="col-lg-4 col-md-6 col-10 ">
        <div className="feature-box">
            <div className="tumb">
                <img src={props.data.image} alt=""/>
            </div>
            <h4 className="text-title">{props.data.heading}</h4>
            <p>{props.data.des}</p>
        </div>
    </div>
  );}
export default FeatureCard;