import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer  from './application/reducers/RootReducer';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(thunk, createLogger()));

ReactDOM.render(
    <BrowserRouter>
		<Provider store={store}>
			<App/>
		</Provider>
    </BrowserRouter>,
    document.getElementById('root'));
