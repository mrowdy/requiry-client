import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Product from './Product';

export default React.createClass({
    mixins: [PureRenderMixin],
    getProducts: function(){
        return this.props.products || [];
    },
    isEmpty: function(){
        return !this.getProducts().length > 0;
    },
    render: function() {
        return <div className="product-list">
            <h1>Products Page</h1>
            {this.getProducts().map(product =>
                <div key={product.id}>
                <Product {...product}></Product>
                    </div>
            )}
            {this.isEmpty() ?
                <div className="product-list_empty">
                    Currently no products
                </div>
                :
                null
            }
            <button className="product-list_create"
                    onClick={() => this.props.onCreate ? this.props.onCreate() : null}>
                Create product
            </button>
        </div>;
    }
});
