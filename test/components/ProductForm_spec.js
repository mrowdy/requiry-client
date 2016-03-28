import React from 'react';
import {expect} from 'chai';
import {
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    Simulate
} from 'react-addons-test-utils';

import ProductForm from '../../src/components/ProductForm';

describe('ProductForm', () => {
    it('it contains an input field with value', () => {
        const component = renderIntoDocument(<ProductForm value="foo" />);
        const input = findRenderedDOMComponentWithClass(component, 't-name');
        expect(input.value).to.equal('foo');
    });

    it('it contains a save button', () => {
        const component = renderIntoDocument(<ProductForm />);
        const button = findRenderedDOMComponentWithClass(component, 't-save');
    });

    it('it calls onSave event with name when form is submitted', () => {
        let saved = null;
        const save = (data) => saved = true;

        const component = renderIntoDocument(<ProductForm onSave={save}/>);
        const form = findRenderedDOMComponentWithClass(component, 't-form');

        Simulate.submit(form);
        expect(saved).to.be.true;
    });

    it('it calls onChange when input is changed', () => {
        let name = null;
        const change = (data) => name = data.name;

        const component = renderIntoDocument(<ProductForm onChange={change}/>);
        const input = findRenderedDOMComponentWithClass(component, 't-name');

        Simulate.change(input, {target: { value: 'test-name'}});
        expect(name).to.equal('test-name');
    });
});