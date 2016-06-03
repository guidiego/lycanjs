let Action = {
    __actions: {},
    
    register: function (name, action) {
        this.__actions[name] = action;
    },
    
    destroy: function (name) {
        delete this.__actions[name];  
    },
    
    get: function(name) {
        return this.__actions[name];
    }
}

export default Action;