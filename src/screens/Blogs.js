
import React,{useState,useEffect} from "react";
import BlogCard from '../componets/BlogCard';
import ScreenHeading from '../componets/ScreenHeading';
import {GetAllData} from '../services/user'
import { change_data } from '../Redux/Slice/dataSlice';
import {useSelector,useDispatch} from 'react-redux';
const Blogs = () =>  {

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
                loading:true,
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
    <section className="blog-section section">
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