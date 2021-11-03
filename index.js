import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.js';
import './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import { createStore } from  'redux'
import { createReducer } from './store/reducer'

const store = createStore(createReducer);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));