import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import {SET_STATE} from '../src/actions';

import reducer from '../src/reducer';

describe('reducer', () => {

    it('returns state on unknown action', () => {
        const initialState = Map();
        const action = {
            type: 'FOO',
            state: initialState
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(initialState);
    });

    it('returns map if no state is given', () => {
        const action = {
            type: 'FOO'
        };
        const nextState = reducer(undefined, action);
        expect(nextState).to.equal(Map());
    });

    it('it merges state on set state', () => {
        const oldState = Map({
            'foo': 'bar'
        });

        const newState = Map({
            'bar': 'foo'
        });

        const merged = oldState.merge(newState);

        const action = {
            type: SET_STATE,
            state: newState
        };
        const nextState = reducer(oldState, action);
        expect(nextState).to.equal(merged);
    });
});