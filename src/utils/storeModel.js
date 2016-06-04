import parseToCammelCase from './parseToCammelCase';
import Dispatcher from './dispatcher';
import EventEmmiter from 'events';

class StoreModel extends EventEmmiter {
    constructor(store) {
        super();
        this.meta = store;

        this.dispatchToken = Dispatcher.register((action) => this.__mapDispatchActions(action));
    }
    
    getState() {
        return this.meta.state;
    }
    
    __mapDispatchActions(action) {
        this.meta[parseToCammelCase(action.type)](action);
        this.emit('SEVERO_STATE_CHANGE');
    }
    
    onStateChange(callback) {
        this.on('SEVERO_STATE_CHANGE', callback)
    }
}

export default StoreModel;