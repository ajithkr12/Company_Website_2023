
import React from 'react';
import TeamCard from '../componets/TeamCard';
import ScreenHeading from '../componets/ScreenHeading';
import {TeamData} from "../data/Data";
const Team = () =>  {

  return (
 
    <section className="team section">
        <div className="container">
            <ScreenHeading sTittle='Expert Team' bTittle='Meet Our Team' description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'/>

            <div className="row abc">
            {
              TeamData.map((data) => {
                return (
                  <TeamCard data={data}/>
              )})
            }
            </div>

        </div>
    </section>
   

  );}


export default Team;