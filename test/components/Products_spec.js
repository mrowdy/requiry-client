import React from 'react';
import {expect} from 'chai';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithClass,
    findRenderedDOMComponentWithTag,
    Simulate
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

    it('it contains info that no products exist', () => {
        const component = renderIntoDocument(<Products/>);
        const empty = scryRenderedDOMComponentsWithClass(component, 'product-list_empty');
        expect(empty.length).to.equal(1);
    });

    it('empty info is hidden when at least one product is given', () => {
        const products = [{
           name: 'foo'
        }];
        const component = renderIntoDocument(<Products products={products}/>);

        const empty = scryRenderedDOMComponentsWithClass(component, 'product-list_empty');
        expect(empty.length).to.equal(0);
    });

    it('it contains a button to create new products', () => {
        const component = renderIntoDocument(<Products/>);

        const create = scryRenderedDOMComponentsWithClass(component, 'product-list_create');
        expect(create.length).to.equal(1);
    });

    it('it calls onCreate prop', () => {
        let created = false;
        const create = (entry) => created = true;

        const component = renderIntoDocument(<Products onCreate={create}/>);
        const button = scryRenderedDOMComponentsWithClass(component, 'product-list_create');
        Simulate.click(button[0]);

        expect(created).to.be.ok;
    });

    it('it doesnt fail without onCreate prop', () => {
        const component = renderIntoDocument(<Products/>);
        const button = scryRenderedDOMComponentsWithClass(component, 'product-list_create');
        Simulate.click(button[0]);
    });

});