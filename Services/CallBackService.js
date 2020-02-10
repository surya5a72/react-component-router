import React, { Component } from 'react';
import axios from 'axios';

const baseURL='https://jsonplaceholder.typicode.com/users/';

export class CallBackService{ 
  constructor(){
    
  }
  AxiosServiceGetData = () => {
    return axios.get(baseURL).then((res) => res );   
  }

  AxiosServiceGetbyId = (id) => {
    axios.get(baseURL + id).then((res) => {
      console.log(res);
    })
  }

  AxiosServicePost = (data) => {
    axios.post(baseURL, data).then((res) => {
      console.log(res);
    })
  }
}
