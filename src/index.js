import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Search from './components/Search';
import User from './components/User';
import Repos from './components/Repos';
import Followers from './components/Followers';
import Following from './components/Following';
import RepoQuery from './components/RepoQuery';
import UserQuery from './components/UserQuery';

const routes = (
    <Router basename={process.env.PUBLIC_URL} history={browserHistory}>
        <Route exact path="/" component={App}>
            <IndexRoute component={Search}/>
            <Route exact path="user/:username" component={User}/>
            <Route exact path="user/:username/repos" component={Repos}/>
            <Route exact path="user/:username/followers" component={Followers}/>
            <Route exact path="user/:username/following" component={Following}/>
            <Route exact path="search/repo/:query" component={RepoQuery}/>
            <Route exact path="search/user/:query" component={UserQuery}/>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
