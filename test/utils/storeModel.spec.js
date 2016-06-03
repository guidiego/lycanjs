import StoreModel from '../../src/utils/storeModel';
import { expect } from 'chai';

describe('Store Model', () => {
    let storeConfig;
    
    beforeEach(() => {
        storeConfig = {
            state: {
                test: ''
            },
            methods: {
                setTest: (test) => this.state.test = test
            }
        }
    });
    
    it('should construct the properties correctly', () => {
        const instance = new StoreModel(storeConfig);
        
        expect(instance).to.have.property('__state', storeConfig.state);
        expect(instance).to.have.property('__methods', storeConfig.methods);
    })
    
    it('should return correctly state', () => {
        const instance = new StoreModel(storeConfig);
        
        expect(instance.getState()).to.deep.equal(storeConfig.state);
    })
})