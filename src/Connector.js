import React, { Component } from 'react';
import Model from './Model';

const Connector = (modelName) => {
    let {store, action} = Model.get(modelName);
    
    return class SeveroComponent extends Component {
        constructor(props) {
            super(props);
            this.state = store.getState().toJS();
            
            if (action)
                this.action = action;
            
            store.onStateChange(() => {
                this.setState(store.getState().toJS())
            })
        }
    }
}

export default Connector;