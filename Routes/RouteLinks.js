import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//user defined route components
import { Navigation } from './NavigationComponent/Navigation';
import {Welcome} from '../Components/Welcome';
import {Home} from '../Components/Home';
import {Employee} from '../Components/Employee';
import {Employees} from '../Components/Employees';
import {Form} from '../Components/Form';
import {Error} from '../Components/Error';

export const Routes = () => (
  <BrowserRouter>
    <div>
      <Welcome />
      <Navigation />
      <Switch>
        <Route path='/' component={Home} exact={true}/>
        <Route path='/Form' component={Form} />
        <Route path='/Employee' component={Employee}/>
        <Route path='/Employees' component={Employees}/>
        <Route component={Error}/>
      </Switch>
    </div>
  </BrowserRouter>
);