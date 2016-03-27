import React from 'react';
import {expect} from 'chai';
import {
    renderIntoDocument,
    findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';

import Product from '../../src/components/Product';

describe('Product', () => {

    it('it contains its given name', () => {
        const name = 'test-name';
        const component = renderIntoDocument(<Product name={name} />);
        const div = findRenderedDOMComponentWithTag(component, 'div');
        expect(div.textContent).to.contain(name);
    });
});