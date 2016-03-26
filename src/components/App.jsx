import React from 'react';
import {ConnectionStateContainer} from '../containers/ConnectionStateContainer';

export default React.createClass({
    render: function() {
        return <div>
            <ConnectionStateContainer />
            {this.props.children}
        </div>
    }
});