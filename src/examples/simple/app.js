import React from 'react';
import {addStyles} from 'i-css';

const app = {
    _rules: {
        '@font-face': {
            fontFamily: 'myriad-pro',
            src: `
                url(${require('./font/myriad-pro__regular.eot')}), 
                url(${require('./font/myriad-pro__regular.eot?#iefix')}) format('embedded-opentype'),
                url(${require('./font/myriad-pro__regular.woff')}) format('woff'),
                url(${require('./font/myriad-pro__regular.ttf')}) format('truetype')
            `,
            fontStyle: 'normal',
            fontWeight: 'normal'
        }
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
    wrapper() {
        return {
            ...this.full,
            fontFamily: 'myriad-pro',
            backgroundColor: 'blue',
            [`&:hover .${this.text}`]: {
                color:  'yellow'
            }
        }
    },
    full: {
        width: '100%',
        height: '100%'
    },
    text: {
        color: 'green'
    },
    _animationSpinner: {
        '0%': { 'transform': 'rotate(0deg)' },
        '100%': { 'transform': 'rotate(360deg)' }
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
            'animation': `${this._animationSpinner} 2s linear infinite`
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