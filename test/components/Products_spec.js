import React from 'react';
import {expect} from 'chai';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';

import Products from '../../src/components/Products';

describe('Products', () => {

    it('it renders products', () => {
        const products = [
            {
                'name': 'test-product-1'
            },
            {
                'name': 'test-product-2'
            }
        ];
        const component = renderIntoDocument(<Products products={products} />);
        const productItems = scryRenderedDOMComponentsWithClass(component, 'product');
        const [product1, product2] = productItems.map(e => e);

        expect(productItems.length).to.equal(2);
        expect(product1.textContent).to.contain('test-product-1');
        expect(product2.textContent).to.contain('test-product-2');
    });


});