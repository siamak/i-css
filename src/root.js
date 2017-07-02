import React from 'react';
import App from 'app';
import {renderCSS} from 'i-css';

class Root extends React.Component {
    constructor(p_) {
        super(p_);

        this.state = {};
    }
    componentWillMount() {
        renderCSS(document.getElementById('cssRoot'));
    }
    render() {
        return (
            <App />
        );
    }
}

export default Root;