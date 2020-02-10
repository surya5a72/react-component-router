import React, { Component } from 'react';
import { render } from 'react-dom';

import {CallBackService} from '../Services/CallBackService';

debugger;
const Service = new CallBackService();
let response = Service.AxiosServiceGetData();
export const Employees = () => (
  <div>
    {console.log(response)}
      <h1 align='center'>Welcome to Employees</h1>
  </div>
);