import React from 'react';
import {addStyles} from 'i-css';

const app = {
    full: {
        width: '100%',
        height: '100%'
    },
    animationSpinner: {
        from: { 'transform': 'rotate(0deg)' },
        to: { 'transform': 'rotate(360deg)' }
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
    spinner() {
        return {
            border: `4px solid #ffffff`,
            borderRadius: '50%',
            borderTop: `4px solid green`,
            borderRight: `4px solid green`,
            borderBottom: `4px solid green`,
            width: 56,
            height: 56,
            'animation': `${this.animationSpinner} 2s linear infinite`
        }
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
                <div className={app.spinner} />
            </div>
        );
    }
}

export default App;