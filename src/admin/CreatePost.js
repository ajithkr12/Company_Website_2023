
import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {CreateOneData} from '../services/user'

const CreatePost = () =>  {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
      loading:false,
      results:{
        tittle: "",
        s_description: "",
        author: "",
        date: "10 Aug 2024",
        readtime: "",
        quotation: "a",
        p1: "",
        p2: "t",
        p3: "u",
        tag: "y",
        photo: "u",
        htmlData: "u"
      },
      errorMessage:'',
    });


    const handleChange = (event) => {

      setInputs({
        ...inputs, 
        results:{
          ...inputs.results,
          [event.target.name]:event.target.value
        }
      });
    };


    const createClick =  async(event) => {
      event.preventDefault();
      console.log(inputs)
      let payload = inputs.results;

      try {
        console.log("data sentomo")
        await CreateOneData(payload); 
        // alert("Post created!");
        setInputs({
          ...inputs,
          loading:true
        }) ;
        
      } 
      catch (error) {
        const _error =
        (error.response &&
          error.response.data &&
            error.response.data.message) ||
              error.message ||
                error.toString();
        setInputs({
          ...inputs,
          loading:false,
          errorMessage:_error
        }) ;
        console.log('error vannu',_error);  
      }

      navigate("/");
    };

const {loading,results,errorMessage}=inputs;
  return ( 
    <React.Fragment>
    
    <section className="contact-search section">
      <div className="container">
        

          <div className="row">
            <div className="col">
            <p className="h3"> Create Post</p>
            <p className="fst-italic">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-8">
              <form onSubmit={createClick}>

                <div className="mb-2">
                <input type="text" name='tittle' value={results.tittle} onChange={handleChange} placeholder="Tittle" required={true} className="form-control"></input>
                </div>

                <div className="mb-2">
                <input type="text" name='s_description' value={results.s_description} onChange={handleChange} placeholder="Small Description" required={true} className="form-control"></input>
                </div>

                <div className="mb-2">
                <input type="text" name='author' value={results.author} onChange={handleChange} placeholder="Author Name" required={true} className="form-control"></input>
                </div>

                <div className="mb-2">
                <input type="number" name='readtime' value={results.readtime} onChange={handleChange} placeholder='Read Time' required={true} className="form-control"></input>
                </div>

                <div className="mb-2">
                <input type="text" name='quotation' value={results.quotation} onChange={handleChange} placeholder="Quotation" required={true} className="form-control"></input>
                </div>

                <div className="mb-2">
                <input type="text" name='p1' value={results.p1} onChange={handleChange} placeholder="Para 1" required={true} className="form-control"></input>
                </div>

                <div className="mb-2 ">
                  <input type="submit" value='Save' className="btn btn-dark"/>
                  <Link to={`/`}>
                    <button className="btn btn-primary ms-2">Cancel</button>
                  </Link>      
                </div>
              </form>
            </div>
          </div>

      </div>
    </section>

  </React.Fragment>  

  );}
export default CreatePost;