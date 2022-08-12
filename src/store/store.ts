import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import nodes from './nodes/index';

const { reducer } = nodes;

export const store = createStore(reducer, applyMiddleware(thunk));

//@ts-ignore
window.state = store.getState;
