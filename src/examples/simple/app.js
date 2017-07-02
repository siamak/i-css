import React from 'react';
import {cn, addStyles} from 'i-css';

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
            background: `url(${require('./images/bg.jpeg')})`,
            backgroundPosition: 'cover',
            [`&:hover .${this.text}`]: {
                color:  'yellow'
            }
        }
    },
    header() {
        return {
            ...this.textCenter,
            paddingTop: '30vh',
            color: '#ffffff',
            '& h1': {
                fontSize: 36
            }
        }
    },
    full: {
        width: '100%',
        height: '100%'
    },
    textCenter: { textAlign: 'center' },
    textMd: { fontSize: 22 },
    indent: { padding: 10 },
    _animationSpinner: {
        '0%': { 'transform': 'rotate(0deg)' },
        '100%': { 'transform': 'rotate(360deg)' }
    },
    spinner() {
        const width = '7px';
        const color = '#ff6d4a';

        return {
            ...this.textCenter,
            border: `${width} solid #inherit`,
            borderRadius: '50%',
            borderTop: `${width} solid ${color}`,
            borderRight: `${width} solid ${color}`,
            borderBottom: `${width} solid ${color}`,
            width: 56,
            height: 56,
            margin: '0 auto',
            'animation': `${this._animationSpinner} 2s linear infinite`
        }
    }
};
addStyles(app);

class App extends React.Component {
    render() {
        return (
            <div className={app.wrapper}>
                <div className={app.header}>
                    <h1>
                        I - CSS
                    </h1>
                    <div className={app.spinner} />
                    <div className={cn(app.textCenter, app.textMd, app.indent)}>
                        CSS in JS
                    </div>
                    <div className={app.textCenter}>
                        Don't wait loading, try it now!
                    </div>
                </div>
            </div>
        );
    }
}

export default App;