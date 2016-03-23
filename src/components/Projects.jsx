import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

export const Voting = React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        return <div>
            <h1>Projects Page</h1>
        </div>;
    }
});

function mapStateToProps(state) {
    return {};
}

export const ProjectsContainer = connect(
    mapStateToProps
)(Voting);