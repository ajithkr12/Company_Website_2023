
import React from 'react';

const TeamCard = (props) =>  {
    console.log(props.data);

  return (
 

                <div className="col-lg-3 col-md-6 col-12">
                  
                    <div className="single-team">
                        <div className="team-image">
                            <img src={props.data.image} alt="#"/>
                        </div>
                        <div className="content">
                            <h4>{props.data.name}<span>{props.data.position}</span></h4>
                            <ul className="social">
                                <li><a href={props.data.fb}><i class="bi bi-facebook"></i></a></li>
                                <li><a href={props.data.ig}><i class="bi bi-instagram"></i></a></li>
                                <li><a href={props.data.tw}><i class="bi bi-twitter"></i></a></li>
                                <li><a href={props.data.li}><i class="bi bi-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                   
                </div> 
  );}


export default TeamCard;