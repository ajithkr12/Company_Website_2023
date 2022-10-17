
import React from "react";
import BlogCard from '../componets/BlogCard';
import ScreenHeading from '../componets/ScreenHeading';
import {useSelector} from 'react-redux';
const Blogs = () =>  {

  const resultp=useSelector(state=>state.data.value)//receive state value

  return ( 
    

    <section className="blog-section section animate__animated animate__fadeInLeft">
        <div className="container">

          <ScreenHeading sTittle='Blogs' bTittle='Our Latest News' description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'/>
          <div className="row">
            {Object.values(resultp).map((data,index) => {
              if(index<=2){
                return (
                  <BlogCard data={data}/>
                  );
              }
            })}
          </div>


        </div>
    </section>
  );}


export default Blogs;