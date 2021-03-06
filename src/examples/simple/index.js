import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept('./app', () => {
        const NextApp = require('./app').default;
        ReactDOM.render(<NextApp/>, document.getElementById('root'));
    });
}