import React, { Component } from 'react';
import { render } from 'react-dom';
import { NavLink } from 'react-router-dom';



export const Navigation = () => (
  <div>
    <ul className="nav nav-tabs">
        <li><NavLink to='/' exact={true}>Home</NavLink></li>
        <li><NavLink to='/Form'>Form</NavLink></li>
        <li><NavLink to='/Employee'>Employee</NavLink></li>
        <li><NavLink to='/Employees'>All Emp's</NavLink></li>
        <li><NavLink to='/Error'>Error</NavLink></li>
    </ul>
</div>
);