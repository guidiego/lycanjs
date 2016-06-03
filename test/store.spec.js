import Store from '../src/store';
import { expect } from 'chai';

describe('Store', () => {
    let storeConfig;
    
    beforeEach(() => {
        storeConfig = {
            state: {
                test: ''
            },
            method: {
                setTest: (test) => this.state.test = test
            }
        }
    });
    
    it('should register a store', () => {
        Store.register('test', storeConfig);
        expect(Store.__stores).to.have.property('test');
    });
    
    it('should be destroy the Store', () => {
        Store.register('test', storeConfig);
        Store.destroy('test');
        
        expect(Store.__stores).to.not.have.property('test');
    })
    
    it('should get the store', () => {
        Store.register('test', storeConfig);
        let store = Store.get('test');
        
        expect(store.getState()).to.deep.equal(storeConfig.state);
    })
})