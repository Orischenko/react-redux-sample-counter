import { createStore } from 'redux';
import reducer from '../reducer/index';

const store = createStore(reducer);

//not from prod
window.store = store;

export default store;