import axios from "axios";

// const API_URL = "http://localhost:3333/";
const API_URL = "https://my-json-server.typicode.com/ajithkr12/fakeApi/blogs/";

export const GetAllData=async ( )=>{

  try {
    const response =  await axios.get(API_URL);
    return response.data;
    
  } 
  catch (error) {
    const _error =
    (error.response &&
      error.response.data &&
        error.response.data.message) ||
          error.message ||
            error.toString();
    console.log('error vannu',_error);  
  }
  // finally {
  //   console.log("The Promise is settled, meaning it has been resolved or rejected.");
  // }
  
}

export const GetOneData=async (id)=>{

  try {
    console.log("data kitomo",id)
    const response =  await axios.get(API_URL+id);
    return response.data;
    
  } 
  catch (error) {
    const _error =
    (error.response &&
      error.response.data &&
        error.response.data.message) ||
          error.message ||
            error.toString();
    console.log('error vannu',_error);  
  }
  // finally {
  //   console.log("The Promise is settled, meaning it has been resolved or rejected.");
  // }
  
}

export const DeleteOneData=async (id)=>{

  try {
    console.log("data kitomo",id)
    await axios.delete(API_URL+id); 
    alert("Post deleted!");
    return null;
    
  } 
  catch (error) {
    const _error =
    (error.response &&
      error.response.data &&
        error.response.data.message) ||
          error.message ||
            error.toString();
    console.log('error vannu',_error);  
  }
  // finally {
  //   console.log("The Promise is settled, meaning it has been resolved or rejected.");
  // }
  
}


export const CreateOneData=async (payload)=>{

  try {
    console.log("data sentomo")
    await axios.post(API_URL,payload); 
    // alert("Post created!");
    return null;
    
  } 
  catch (error) {
    const _error =
    (error.response &&
      error.response.data &&
        error.response.data.message) ||
          error.message ||
            error.toString();
    console.log('error vannu',_error);  
  }
  // finally {
  //   console.log("The Promise is settled, meaning it has been resolved or rejected.");
  // }
  
}

export const UpdateData=async (id,payload)=>{

  try {
    console.log("data sentomo")
    await axios.put(API_URL+id,payload); 
    // alert("Post created!");
    return null;
    
  } 
  catch (error) {
    const _error =
    (error.response &&
      error.response.data &&
        error.response.data.message) ||
          error.message ||
            error.toString();
    console.log('error vannu',_error);  
  }
  // finally {
  //   console.log("The Promise is settled, meaning it has been resolved or rejected.");
  // }
  
}