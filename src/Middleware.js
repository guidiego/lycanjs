class Middleware {
    constructor() {
        this.__middlewares = [];
    }
  
    register(middleware) {
        this.__middlewares.push(middleware);    
    }  
    
    execAll(payload) {
        this.__middlewares.forEach(mid => mid(payload));
    }
}

export default new Middleware();