import React from 'react';
import Footer from '../componets/Footer';

import Breadcrumbs from '../componets/Breadcrumbs'
import BlogCard from '../componets/BlogCard';

const BlogGrid = () =>  {

  return (
    <div className="">
        <Breadcrumbs tittle='Blogs'/>


      <section class="section blog-grid-page">
        <div class="container">
            <div class="row">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>


            </div>
        </div>
    </section>



        <Footer/>
    </div>

  );}


export default BlogGrid;