import React from 'react';
import ReactDOM from 'react-dom';
require('./../sass/style.scss');
import Counter from './components/counter';
import store from './store';
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={ store }>
        <Counter />
    </Provider>,
    document.getElementById('counter')
);