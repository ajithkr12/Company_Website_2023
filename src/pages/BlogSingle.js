import React,{useState,useEffect} from "react";
import Footer from '../componets/Footer';

import Breadcrumbs from '../componets/Breadcrumbs'
import { useParams } from "react-router-dom";
import {GetOneData} from '../services/user';
import BlogImage from '../images/blog/blog-1.png';


const BlogSingle = (props) =>  {
    const [state, setState] = useState({
        loading:false,
        results:{},
        errorMessage:'',
      
      });
    
      const {id}=useParams();
      console.log(id);
    
    
      useEffect(() => {
        const FetchData= async () => {
          console.log('id evide vannu',id);
          try {
            const response =  await GetOneData(id);
            setState({
              ...state,
              loading:false,
              results:response.data
            }) ;
          } 
          catch (error) {
            const _error =
            (error.response &&
              error.response.data &&
                error.response.data.message) ||
                  error.message ||
                    error.toString();
            setState({
              ...state,
              loading:false,
              errorMessage:_error
            }) ;
          }
          finally {
            console.log("The END");
          }
        };
        FetchData();
      },[])
    
      let { loading,results,errorMessage}=state;
      if(!results){
        return null;
      }
  return (
    <div className="">
        <Breadcrumbs tittle='Blog' page='Blog'/>


      <section className="section blog-single">
        <div className="container">
            <div className="row abc">
                <div className="col-lg-10 col-md-11 col-11">
                    <div className="single-inner">
                        <div className="post-details">
                            <div className="main-content-head">
                                <div className="post-thumbnils">
                                    <img src={BlogImage} alt="#"/>
                                </div>
                                <div className="meta-information">
                                    <h2 className="post-title">{results.tittle}</h2>
                                    
                                    <ul className="meta-info">
                                        <li>
                                            <a href="">By {results.author}</a>
                                        </li>
                                        <li>
                                            <a href="">{results.date}</a>
                                        </li>
                                        <li>
                                            <a href="">{results.tag}</a>
                                        </li>
                                    </ul>
                                    
                                </div>
                                <div className="detail-inner">
                                    <p>{results.p1}</p>
                                    <p>{results.p2}</p>
                                     
                                    <p>{results.p3}</p>
                                    <p>{results.p3}</p>
                                    <p>{results.p3}</p>
                                    <blockquote>
                                        <div className="icon">
                                            <i className="lni lni-quotation"></i>
                                        </div>
                                        <h4>{results.quotation}</h4>
                                        
                                    </blockquote>
                                    <p>{results.p3}</p>
                                    <div dangerouslySetInnerHTML={ {__html:results.htmlData} } />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    

                    
                   
                </div>
             
            </div>
        </div>
    </section>



        <Footer/>
    </div>

  );}


export default BlogSingle;