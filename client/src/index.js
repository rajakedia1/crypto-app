import React from 'react';
import ReactDom from 'react-dom';
import 'babel-polyfill';

import Main from './main';
import ConfigureStore from './reducers';
import { Provider } from 'react-redux';


const store = ConfigureStore();

ReactDom.render(
    <Provider store={store}>
        <Main />
    </Provider>
    , document.getElementById('app'));