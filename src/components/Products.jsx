import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Product from './Product';

export default React.createClass({
    mixins: [PureRenderMixin],
    getProducts: function(){
        return this.props.products;
    },
    render: function() {
        return <div>
            <h1>Products Page</h1>
            {this.getProducts().map(product =>
                <Product {...product}></Product>
            )}
        </div>;
    }
});
