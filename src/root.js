import React from 'react';
import App from 'app';
import {renderStyles} from 'i-css';

class Root extends React.Component {
    constructor(p_) {
        super(p_);

        this.state = {};
    }
    componentWillMount() {
        renderStyles(document.getElementById('stylesRoot'));
    }
    render() {
        return (
            <App />
        );
    }
}

export default Root;