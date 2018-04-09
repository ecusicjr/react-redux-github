import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Search from './components/Search';
import User from './components/User';
import Repos from './components/Repos';
import Followers from './components/Followers';
import Following from './components/Following';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Search}/>
            <Route path="user/:username" component={User}/>
            <Route path="user/:username/repos" component={Repos}/>
            <Route path="user/:username/followers" component={Followers}/>
            <Route path="user/:username/following" component={Following}/>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
