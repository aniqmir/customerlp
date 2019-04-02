import React from 'react';
import {
    Router,
    Route
    }   from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from './views/Home/Home.jsx';

const customHistory = createBrowserHistory();



const CustomRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Route exact path="/" component={Home}/>
        </div>
    </Router>
    )
    
export default CustomRoutes;