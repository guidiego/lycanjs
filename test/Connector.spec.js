import React from 'react';

import { Model, Connector } from '../src/Main';
import { expect } from 'chai';

const reactions = {
    increase: (state) => state.set('count', state.get('count') + 1),
    decrease: (state) => state.set('count', state.get('count') + -1)
}

const state = { count: 0 };

Model.register('counter', state, reactions);

class TestComponent extends Connector('counter') {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (<h1> {this.state.count} </h1>)
    }
}

describe('Connector', () => {
    it('should put state into component', () => {
        const instance = new TestComponent();
        expect(instance.state).to.deep.equal(state);
    })
})
