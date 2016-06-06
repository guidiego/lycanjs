import Model from '../src/Model';
import Dispatch from '../src/Dispatch';
import { expect } from 'chai';

describe('Model', () => {
    let state, reactions;
    
    beforeEach(() => {
        state = {
            count: 0
        };
        
        reactions = {
            increase: (state) => state.set('count', state.get('count') + 1),
            decrease: (state) => state.set('count', state.get('count') + -1)
        }
    })
    
    it('should have register a Model', () => {
        Model.register('example', state, reactions);
        expect(Model.__registredModels).to.have.property('example');
    });
    
    it('should have register another Model', () => {
        Model.register('example2', state, reactions);
        expect(Model.__registredModels).to.have.property('example');
        expect(Model.__registredModels).to.have.property('example2');
    });
    
    it('should have to delete example model', () => {
        Model.destroy('example');
        expect(Model.__registredModels).to.not.have.property('example');
        expect(Model.__registredModels).to.have.property('example2');
    });
})