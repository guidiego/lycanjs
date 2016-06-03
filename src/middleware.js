let Middleware = {
    __middlewares : [],
    
    register: function (fn) {
        this.__middlewares.push(fn);
    },
    
    getAll: function () {
        return this.__middlewares;
    },
    
    execAll: function (payload) {
      this.__middlewares.forEach((m) => {
          m(payload);
      });
    }
}

export default Middleware;