import React from 'react';
import {addStyles} from 'i-css';

const app = {
    full: {
        width: '100%',
        height: '100%'
    },
    _global() {
        return {
            'html, body, #root': {
                ...this.full,
                padding: 0,
                margin: 0
            }
        }
    },
    text: {
        color: 'green'
    },
    wrapper() {
        return {
            ...this.full,
            backgroundColor: 'red',
            [`&:hover .${this.text}`]: {
                color:  'yellow'
            }
        }
    }
};
addStyles(app);

class App extends React.Component {
    render() {
        return (
            <div className={app.wrapper}>
                <div className={app.text}>
                    App
                </div>
            </div>
        );
    }
}

export default App;