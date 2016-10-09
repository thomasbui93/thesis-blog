import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { Link, Route, IndexRoute, History, browserHistory, hashHistory, useRouterHistory  } from 'react-router';
import { createHashHistory } from 'history';

import routes from './app';

import styles from './scss/main.scss';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
ReactDOM.render(
    <Router history={ appHistory }>
        { routes }
    </Router>
    , document.getElementById('content')
);

