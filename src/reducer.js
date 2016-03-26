import {List, Map} from 'immutable';
import {SET_STATE, SET_CONNECTION_STATE} from './actions';

export default function(state = Map(), action) {
    switch (action.type) {
        case SET_CONNECTION_STATE:
            return setConnectionState(state, action.state, action.connected);
        case SET_STATE:
            return setState(state, action.state);
    }
    return state;
}

function setConnectionState(state, connectionState, connected) {
    return state.set('connection', Map({
        state: connectionState,
        connected
    }));
}

function setState(state, newState){
    return newState;
}
