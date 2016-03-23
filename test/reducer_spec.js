import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

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
});