
import React from 'react';
import MissionCard from '../componets/MissionCard';
import {MissionData} from "../data/Data";

const Mission = () =>  {

  return (
 
    <div className="mission section blue">
        <div className="container ">
            <div className="row abc">
            {
              MissionData.map((data) => {
                return (
                <MissionCard data={data}/>
                )})
            }
            </div>
        </div>
    </div>
   

  );}


export default Mission;