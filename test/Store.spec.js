import Store from '../src/Store';
import Dispatch from '../src/Dispatch';

import { spy } from 'sinon';
import { expect } from 'chai';

describe('Store', () => {
    let store, state, reactions;
    
    beforeEach(() => {
        state = {
            count: 0
        };
        
        reactions = {
            increase: (state) => state.set('count', state.get('count') + 1),
            decrease: (state) => state.set('count', state.get('count') - 1),
            increaseNumber: (state, {quantity}) => state.set('count', state.get('count') + quantity)
        }
        
        store = new Store('example', state, reactions)
    })
    
    it('should get the state', () => {
        expect(store.getState().toJS()).to.deep.equal(state);
    })
    
    it('should have store name', () => {
        expect(store.dispatchName).to.be.equal('EXAMPLE_STORE_CHANGE')
    });
    
    it('should call callback event on dispatch', () => {
        const callbackSpy = spy();
        store.onStateChange(callbackSpy);
        
        Dispatch('INCREASE', {});
        expect(callbackSpy).to.be.calledOnce;
    });
    
     it('should call callback event on dispatch with params', () => {
        Dispatch('INCREASE_NUMBER', {quantity: 5});
        expect(store.getState().get('count')).to.be.equal(5);
    });
    
    it('should not call callback event on dispatch', () => {
        const callbackSpy = spy();
        store.onStateChange(callbackSpy);
        
        Dispatch('ANOTHER_ONE', {});
        expect(callbackSpy).to.not.be.calledOnce;
    })
})