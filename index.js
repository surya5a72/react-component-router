import React, { Component } from 'react';
import { render } from 'react-dom';

//user defined imports
import { Routes } from './Routes/RouteLinks';

import {CallBackService} from './Services/CallBackService';

render(<Routes />, document.getElementById('app'));



