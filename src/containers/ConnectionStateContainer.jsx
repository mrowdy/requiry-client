import {ConnectionState} from '../components/ConnectionState.jsx';
import {connect} from 'react-redux';
import {Map} from 'immutable';

function mapStateToProps(state) {
    return state.get('connection', Map()).toJS();
}

export const ConnectionStateContainer = connect(
    mapStateToProps
)(ConnectionState);