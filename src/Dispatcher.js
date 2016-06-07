import { Dispatcher } from "flux"
import Middleware from "./Middleware";

class AppDispatcher extends Dispatcher {
    dispatch(payload) {
        if (this.logger) console.log('<' + payload.type + '>')
        Middleware.execAll(payload);
        super.dispatch(payload);
    }
}

export default new AppDispatcher();