import Store from './Store';
import { Map } from 'immutable';

class Model {
    constructor() {
        this.__registredModels = {} 
    }
    
    register(name, state, reactions, actions) {
        this.__registredModels[name] = {};
        this.__registredModels[name].store = new Store(name, state, reactions);
        if (actions) this.__registredModels[name].action = actions
    }
    
    destroy(name) {
        delete this.__registredModels[name];
    }
    
    get(name) {
        return this.__registredModels[name];
    }
}

export default new Model();