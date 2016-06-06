import { Dispatcher } from "flux"

class AppDispatcher extends Dispatcher {
    dispatch(payload) {
        super.dispatch(payload);
    }
}

export default new AppDispatcher();