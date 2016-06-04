import Dispatcher from './dispatcher';

export const Dispatch = (type, data) => Dispatcher.dispatch({type, ...data});

export default Dispatch;