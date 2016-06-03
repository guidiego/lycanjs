import Component from './component.js';
import Store from './store.js';
import Action from './action.js';
import Middleware from './middleware.js';
import Dispatcher from './utils/dispatch';

let Dispatch = (type, data) => Dispatcher.dispatch({type, ...data});

export default {Component, Store, Action, Dispatcher, Dispatch, Middleware};