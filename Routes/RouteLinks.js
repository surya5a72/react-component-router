import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Navigation } from './NavigationComponent/Navigation';

//user defined route components
import {Welcome} from '../Components/Welcome';
import {Home} from '../Components/Home';
import {Employee} from '../Components/Employee';
import {Form} from '../Components/Form';
import {Error} from '../Components/Error';

export const Routes = (
  <BrowserRouter>
    <div>
      <Welcome />
      <Navigation />
      <Route path='/' component={Home} exact={true}/>
      <Route path='/Home' component={Home} />
      <Route path='/Form' component={Form} />
      <Route path='/Employee' component={Employee}/>
      <Route path='/Error' component={Error}/>
    </div>
  </BrowserRouter>
);