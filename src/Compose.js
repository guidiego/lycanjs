import React, { Component } from 'react';
import Model from './Model';

const Compose = (...names) => {
    let stores = names.map(name => Model.get(name).store);
    
    let mapToState = store => store.getState().toJS();
    let reduceToObject = (a, c) => Object.assign(a, c);
    
    const getState = () => stores.map(mapToState).reduce(reduceToObject);
    
    return class SeveroComponent extends Component {
        constructor(props) {
            super(props);
            this.state = getState();
            
            stores.forEach(store => {
                store.onStateChange(() => {
                    this.setState(getState())
                })
            })
        }
    }
}

export default Compose;