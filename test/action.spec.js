import Action from '../src/action';
import { expect } from 'chai';

describe('Action', () => {
    let actionsConfig;
    
    beforeEach(() => {
        actionsConfig = {
            test: (x) => 1 + x
        }
    });
    
    it('should register a action', () => {
        Action.register('example', actionsConfig);
        
        expect(Action.__actions).to.have.property('example', actionsConfig);
    })
    
    it('should return correctly action from get', () => {
        Action.register('example', actionsConfig);
        
        expect(Action.get('example')).to.deep.equal(actionsConfig);
    })
    
    it('should run a action method', () => {
        Action.register('example', actionsConfig);
        
        expect(Action.get('example').test(1)).to.be.equal(2);
    })
    
    it('should destroy a action', () => {
        Action.register('example', actionsConfig);
        Action.destroy('example');
        
        expect(Action.__actions).to.deep.equal({});
    })
})