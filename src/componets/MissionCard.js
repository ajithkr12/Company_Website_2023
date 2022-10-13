
import React from 'react';

const MissionCard = (props) =>  {

  return (
 

                <div className="col-lg-5 col-md-6 col-12">
                    <div className="mission-box">
                        <div className="tumb">
                            <img src={props.data.image} alt=""/>
                        </div>
                        <h4 className="text-title">{props.data.heading}</h4>
                        <p>{props.data.des}</p>
                    </div>
                </div>

  );}


export default MissionCard;