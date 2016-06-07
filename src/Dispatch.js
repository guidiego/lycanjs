import Dispatcher from './Dispatcher';

export const Dispatch = (type, data = {}) => Dispatcher.dispatch({type, ...data});

export default Dispatch;