import React,{useState,useEffect} from "react";
import Footer from '../componets/Footer';
import Breadcrumbs from '../componets/Breadcrumbs'
import BlogCard from '../componets/BlogCard';
import {GetAllData} from '../services/user'
import { change_data } from '../Redux/Slice/dataSlice';
import {useSelector,useDispatch} from 'react-redux';
const BlogGrid = () =>  {
  const dispatch=useDispatch()

  const resultp=useSelector(state=>state.data.value)//receive state value
  
  const [state, setState] = useState({
    loading:false,
    results:{},
    filteredResults:{},
    errorMessage:'',
  });


  
  useEffect(() => {

    const FetchData= async () => {
      try {
            const response =  await GetAllData();
            setState({
                ...state,
                loading:false,
                results:response.data,
                filteredResults:response.data,
            }) ;
            dispatch(change_data({
            data:response.data,
            }))
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
  return (
    <div className="">
        <Breadcrumbs tittle='Blogs' page='Blogs'/>
        <section class="section blog-grid-page">
            <div class="container">
                <div class="row">

                {Object.values(resultp).map((data,index) => {
                    return (
                      <BlogCard data={data} index={index}/>
                    );
                })}

                </div>
            </div>
        </section>
        <Footer/>
    </div>

  );}


export default BlogGrid;
// A lot is happening,We are blogging about it.