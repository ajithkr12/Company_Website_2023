import React from 'react';

const LocationMap = () =>  {

  return (
 
    <div className="map-section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="mapouter">
                        <div className="gmap_canvas"><iframe width="100%" height="500" id="gmap_canvas"
                                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d733449.2042971888!2d76.71122243725401!3d9.383901102722724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3b07d3de96239319%3A0xd1fb30538c1cc0d9!2stinqbit!3m2!1d9.668324199999999!2d76.6208695!5e0!3m2!1sen!2sin!4v1665932489034!5m2!1sen!2sin"
                                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );}


export default LocationMap;

