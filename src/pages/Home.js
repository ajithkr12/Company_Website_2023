import React,{useState,useEffect} from "react";
import Hero from '../screens/Hero';
import Feature from '../screens/Feature'
import Testimonials from '../screens/Testimonials';
import Footer from '../componets/Footer'
import Blogs from '../screens/Blogs';
import Clients from '../screens/Clients';
import {useSelector,useDispatch} from 'react-redux';
import {GetAllData} from '../services/user'
import { change_data } from '../Redux/Slice/dataSlice';

const Home = () =>  {

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
    <div className="">
        <Hero/>
        <Feature/>
        <Testimonials/>
        {
          resultp.length > 0 &&
          <Blogs/>
        }
        <Clients/>
        <Footer/>
    </div>

  );}


export default Home;
        // {
        //   resultp.length > 0 &&
        //   <Blogs/>
        // }
