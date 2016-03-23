import reducer from './reducer';
import {createStore, compose} from 'redux';

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
}