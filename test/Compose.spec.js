import React from 'react';

import { List } from 'immutable';
import { Model, Compose } from '../src/Main';
import { expect } from 'chai';

const reactions = {
    increase: (state) => state.set('count', state.get('count') + 1),
    decrease: (state) => state.set('count', state.get('count') + -1)
}

const reactions2 = {
    addTask: (state, {value}) => state.get('tasks').push(value)
}

const state = { count: 0 };
const state2 = { tasks: [] };

Model.register('counter', state, reactions);
Model.register('task', state2, reactions2);

class TestComponent extends Compose('counter', 'task') {
    constructor(props) {
        super(props);
    }
}

describe('Compose', () => {
    it('should put state into component', () => {
        const instance = new TestComponent();
        const mergeState = Object.assign(state, state2);
        expect(instance.state).to.deep.equal(mergeState);
    })
})
