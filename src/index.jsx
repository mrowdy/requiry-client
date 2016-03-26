import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store';
import io from 'socket.io-client';
import App from './components/App';
import {ProductsContainer} from './containers/ProductsContainer.jsx';
import {setState, setConnectionState} from './actions';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', function (state) {
    store.dispatch(setState(state));
});

[
    'connect',
    'connect_error',
    'connect_timeout',
    'reconnect',
    'reconnecting',
    'reconnect_error',
    'reconnect_failed'
].forEach(ev =>
    socket.on(ev, () => store.dispatch(setConnectionState(ev, socket.connected)))
);

const store = configureStore();

const routes = <Route component={App}>
    <Route path="/" component={ProductsContainer}/>
</Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);


