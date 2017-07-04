import React from 'react';
import {cn, addStyles, renderCss} from 'i-css';

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
    wrapper() { //css modules className: .wrapper_{hash}
        return {
            ...this.full,
            fontFamily: 'myriad-pro',
            background: `url(${require('./images/bg.jpeg')})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            '& a': {
                color: '#ffffff',
                textDecoration: 'none'
            }
        }
    },
    header() {
        return {
            ...this.textCenter,
            display: 'block',
            position: 'relative',
            padding: '40px 0 40px 0',
            top: '30vh',
            color: '#ffffff',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            transition: `300ms linear`,
            boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
            '& h1': {
                fontSize: 36
            },
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
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
        const size = 56;
        const borderWidth = '7px';
        const color = '#ff6d4a';

        return {
            width: size,
            height: size,
            border: `${borderWidth} solid inherit`,
            borderRadius: '50%',
            borderTop: `${borderWidth} solid ${color}`,
            borderRight: `${borderWidth} solid ${color}`,
            borderBottom: `${borderWidth} solid ${color}`,
            margin: '0 auto',
            'animation': `${this._animationSpinner} 2s linear infinite`
        }
    }
};
addStyles(app);

//call it once in app root component
renderCss(document.getElementById('rootCss'));

class App extends React.Component {
    render() {
        return (
            <div className={app.wrapper}>
                <a
                    href="https://www.npmjs.com/package/i-css"
                    className={app.header}
                >
                    <h1>
                        I - CSS
                    </h1>
                    <div className={app.spinner}></div>
                    <div className={cn(app.textCenter, app.indent, {[app.textMd]: true})}>
                        CSS in JS!
                    </div>
                    <div className={app.textCenter}>
                        {`Don't wait loading, try it now!`}
                    </div>
                </a>
            </div>
        );
    }
}

export default App;