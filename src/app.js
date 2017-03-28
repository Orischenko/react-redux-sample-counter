import React from 'react';
import ReactDOM from 'react-dom';
require('./../sass/style.scss');
import Counter from './components/counter';
import store from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
    <Counter />,
    document.getElementById('counter')
);