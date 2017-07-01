import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'root';
ReactDOM.render(<Root />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept('root', () => {
        const NextRoot = require('root').default;
        ReactDOM.render(<NextRoot/>, document.getElementById('root'));
    });
}