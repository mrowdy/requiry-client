import {Products} from '../components/Products';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {};
}

export const ProductsContainer = connect(
    mapStateToProps
)(Products);