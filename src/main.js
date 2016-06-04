import Dispatcher from './utils/dispatch';

let Dispatch = (type, data) => Dispatcher.dispatch({type, ...data});

export { default as Component } from './component.js';
export { default as Store } from './store.js';
export { default as Action } from './action.js';
export { default as Middleware } from './middleware.js';
export { default as Request } from './utils/request';

export default { Dispatcher, Dispatch }