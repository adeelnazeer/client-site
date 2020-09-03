import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import Home from '../src/pages/home/index';
import Aboutus from '../src/pages/about/index';
import Services from '../src/pages/services/index';
import Portfolio from '../src/pages/portfolio/index';
import Contact from '../src/pages/contact/index';
function App() {
  return (
    <BrowserRouter>
    <Route path={'/'} exact component={Home}/>
    <Route path={'/aboutus'} component={Aboutus}/>
    <Route path={'/services'} component={Services}/>
    <Route path={'/portfolio'} component={Portfolio}/>
    <Route path={'/contact'} component={Contact}/>
    </BrowserRouter>
  );
}

export default App;
