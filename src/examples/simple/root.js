import React from 'react';
import App from './app';
import {renderCss} from 'i-css';

class Root extends React.Component {
    constructor(p_) {
        super(p_);

        this.state = {};
    }
    componentWillMount() {
        renderCss(document.getElementById('rootCss'));
    }
    render() {
        return (
            <App />
        );
    }
}

export default Root;