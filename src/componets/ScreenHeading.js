
import React from 'react';

const ScreenHeading = (props) =>  {

  return (
 
    <div className="row">
        <div className="col-12">
            <div className="section-title">
                <h3 className="">{props.sTittle}</h3>
                <h2 className="" >{props.bTittle}</h2>
                <p className="" >{props.description}</p>
            </div>
        </div>
    </div>
    
  );}


export default ScreenHeading;