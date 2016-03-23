import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store';
import io from 'socket.io-client';
import App from './components/App';
import {ProjectsContainer} from './components/Projects';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', function (state) {
        console.log('state received')
    }
);

const store = configureStore();

const routes = <Route component={App}>
    <Route path="/" component={ProjectsContainer}/>
</Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);
