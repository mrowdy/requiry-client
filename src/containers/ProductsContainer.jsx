import Products from '../components/Products';
import {connect} from 'react-redux';
import {List} from 'immutable';

function mapStateToProps(state) {
    return {
        products: state.get('products', List()).toJS()
    };
}

export const ProductsContainer = connect(
    mapStateToProps
)(Products);