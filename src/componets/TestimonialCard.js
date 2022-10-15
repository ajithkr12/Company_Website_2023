import React from 'react';

const TestimonialCard = (props) =>  {
  return (
    <div className="col-lg-4 col-12 ">               
        <div className="single-testimonial">
            <div className="inner-content">
                <div className="quote-icon">
                    <i className="bi bi-quote"></i>
                </div>
                <div className="text">
                    <p>{props.data.quotes}</p>
                </div>
                <div className="author">
                    <img src={props.data.image} alt="#"/>
                    <h4 className="name">{props.data.name}
                        <span className="deg">{props.data.position}</span>
                    </h4>
                </div>
            </div>
        </div>
    </div>
  );}
export default TestimonialCard;