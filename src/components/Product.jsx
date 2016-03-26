import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    getName: function(){
        return this.props.name;
    },
    render: function() {
        return <div className="product">
            <h2 className="product__name">{this.getName()}</h2>
        </div>
    }
});