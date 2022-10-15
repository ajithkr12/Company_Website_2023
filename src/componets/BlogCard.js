
import React from 'react';
import { Link } from 'react-router-dom';
import BlogImage from '../images/blog/blog-1.png';

const BlogCard = (props) =>  {
  return ( 
    <div className="col-lg-4 col-md-6 col-12">
        <div className="single-blog-grid">
            <div className="blog-img">
                <a href="">
                    <img src={BlogImage} alt="#"/>
                </a>
            </div>
            <div className="blog-content">
                <div className="meta-info">
                    <a className="date" href=""><i className="bi bi-stopwatch"></i> {props.data.date}</a>
                    <a className="author" href=""><i className="bi bi-person"></i>{props.data.author}</a>
                </div>
                <h4>
                    <a href="">{props.data.tittle}.</a>
                </h4>
                <p>{props.data.s_description}</p>
                <div className="button">
                    <Link to={`/blog/${props.data.id}`} className="btn">Read More</Link>
                </div>
            </div>
        </div>
    </div>
  );}
export default BlogCard;