import {Component} from 'react';

const LycanComponent = (bind) => {
    let store = Store.get(bind);
    let action = Action.get(bind);
    
    class LycanComponent extends Component {
        constructor(props) {
            super(props);
            this.state = store.toState();
            this.attachMethods(action);
            
            store.onStateChange(() => {
                this.setState(store.toState())
            })
        }
        
        __attachMethods(methods) {
            Object.keys(methods).forEach(key => this[key] = methods[key]);
        }
    }
    
    return LycanComponent;
}
