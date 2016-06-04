import { Component } from 'react';
import Store from './store.js';
import Action from './action.js';

export const SeveroConnector = (bind) => {
    let store = Store.get(bind);
    let action = Action.get(bind);
    
    return class SeveroComponent extends Component {
        constructor(props) {
            super(props);
            this.state = store.getState();
            this.__attachMethods(action);
            
            store.onStateChange(() => {
                this.setState(store.getState())
            })
        }
        
        __attachMethods(methods) {
            Object.keys(methods).forEach(key => this[key] = methods[key]);
        }
    }
}

export default SeveroConnector;
