import StoreModel from './utils/storeModel'

let Store = {
    __stores : {},
    
    register: function (name, config) {
        this.__stores[name] = new StoreModel(config);
    },
    
    destroy: function (name) {
        delete this.__stores[name];  
    },
    
    get: function(name) {
        return this.__stores[name];
    }
}

export default Store;