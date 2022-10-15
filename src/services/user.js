import axios from "axios";

// const API_URL = "http://localhost:3333/blogs/";
const API_URL = "https://my-json-server.typicode.com/ajithkr12/fakeApi/blogs/";

export const GetAllData= () => {
  return axios.get(API_URL );
};


export const GetOneData= (id) => {
    return axios.get(API_URL+id );
  };


export const DeleteOneData= (id) => {
  return axios.delete(API_URL+id );
};


export const CreateOneData= (payload) => {
  return axios.post(API_URL,payload);
};

export const UpdateData= (id,payload) => {
  return axios.put(API_URL+id,payload);
};