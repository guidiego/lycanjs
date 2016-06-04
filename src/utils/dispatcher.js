import Dispatcher from "flux/lib/Dispatcher"
import Middleware from '../middleware';

class AppDispatcher extends Dispatcher {
    dispatch(payload) {
        let mids = Middleware.getAll();
        
        if (mids.length > 0) Middlewares.execAll(payload)
        super.dispatch(payload);
    }
}

export default new AppDispatcher();