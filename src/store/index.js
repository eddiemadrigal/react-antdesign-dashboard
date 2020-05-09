import { createStore } from 'redux';
import rootReduceer from '../reducers';

const store = createStore(rootReduceer);

export default store;