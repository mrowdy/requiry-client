import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export const Products = React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        return <div>
            <h1>Products Page</h1>
        </div>;
    }
});
