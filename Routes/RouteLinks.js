import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {Home} from '../Components/Home';

export const Routes = (
  <BrowserRouter>
    <Route path='/' component={Home} exact={true}/>
  </BrowserRouter>
);