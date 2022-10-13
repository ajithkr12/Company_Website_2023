
import React from 'react';
import BlogCard from '../componets/BlogCard';
import ScreenHeading from '../componets/ScreenHeading';

const LocationMap = () =>  {

  return (
 
    <div className="map-section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="mapouter">
                        <div className="gmap_canvas"><iframe width="100%" height="500" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );}


export default LocationMap;