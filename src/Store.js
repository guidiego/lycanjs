import Dispatcher from './Dispatcher';
import EventEmmiter from 'events';
import {parseToCammelCase, turnToDispatchName } from './StringUtils';
import { Map } from 'immutable';

class Store extends EventEmmiter {
    constructor(name, state, reactions) {
        super();
        this.state = Map(state);
        this.reactions = reactions;
        this.dispatchName = turnToDispatchName(name)  + '_STORE_CHANGE';
        
        this.dispatchToken = Dispatcher.register((action) => this.__mapDispatchActions(name, action));
    }
    
    getState() {
        return this.state;
    }
    
    haveReaction(reaction) {
        return Object.keys(this.reactions).indexOf(reaction) > -1;
    }
    
    onStateChange(callback) {
        this.on(this.dispatchName, callback);
    }
    
    __mapDispatchActions(name, action) {
        let reaction = parseToCammelCase(action.type);
        
        if (this.haveReaction(reaction)) {
            this.state = this.reactions[reaction](this.state, action);
            this.emit(this.dispatchName);   
        }
    }
}

export default Store;