
import React from 'react';
import { Link } from 'react-router-dom';
const BlogCard = () =>  {

  return (
 
    <div className="col-lg-4 col-md-6 col-12 ">

    <div className="single-blog-grid">
        <div className="blog-img">
            <a href="">
                <img src="assets/images/blog/blog-1.png" alt="#"/>
            </a>
        </div>
        <div className="blog-content">
            <div className="meta-info">
                <a className="date" href=""><i className="bi bi-stopwatch"></i> 10 June 2023</a>
                <a className="author" href=""><i className="bi bi-person"></i> Anjelio Joly</a>
            </div>
            <h4>
                <a href="">The Intersection Where Blockchain Meets Energy.</a>
            </h4>
            <p>Lorem ipsum dolor sit amet, adipscing elitr, sit gifted sed diam nonumy eirmod tempor
                ividunt dolore.</p>
            <div className="button">
                <Link to="/blog" className="btn">Read More</Link>
            </div>
        </div>
    </div>

</div>

  );}


export default BlogCard;