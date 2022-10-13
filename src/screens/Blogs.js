
import React from 'react';
import BlogCard from '../componets/BlogCard';
import ScreenHeading from '../componets/ScreenHeading';

const Blogs = () =>  {

  return (
 
    <section className="blog-section section">
        <div className="container">
            <ScreenHeading sTittle='Blogs' bTittle='Our Latest News' description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'/>
            <div className="row">
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
        </div>
    </section>
   

  );}


export default Blogs;