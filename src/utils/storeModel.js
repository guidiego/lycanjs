import parseToCammelCase from './parseToCammelCase';
import Dispatcher from './dispatch';
import EventEmmiter from 'events';

class StoreModel extends EventEmmiter {
    constructor(store) {
        super();
        this.__state = store.state;
        this.__methods = store.methods;

        this.dispatchToken = Dispatcher.register(this.__mapDispatchActions);
    }
    
    getState() {
        return this.__state;
    }
    
    __mapDispatchActions(action) {
        this.__methods[parseToCammelCase(action.type)](action);
        this.emit('LYCAN_STATE_CHANGE');
    }
    
    onStateChange(callback) {
        this.on('LYCAN_STATE_CHANGE', callback)
    }
}

export default StoreModel;