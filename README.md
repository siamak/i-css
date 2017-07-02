## I-CSS (CSS in JS)
It is npm package, for writing css in js.

### CSS modules in box.
Based on [free-style](https://github.com/blakeembrey/free-style)
<br />[Demo](https://irom-io.github.io/i-css/)
<br />[Demo source](https://github.com/irom-io/i-css/blob/master/src/examples/simple/app.js)

## Install

```
$ npm install i-css --save
```

## Usage

### Basic
```javascript
import React from 'react';
import {addStyles} from 'i-css';

const app = {
    wrapper: { //css modules className: .wrapper_{hash}
        width: '100%',
        border: `1px solid orange`
    }
};
addStyles(app);

const App = () => <div className={app.wrapper}></div>
```

### Mix styles
```javascript
const app = {
    //...
    wrapper() { //you can use function or plain object
        return {
            ...this.full,
            border: `1px solid orange`
        }
    },
    full: {
        width: '100%',
        height: '100%'
    }
    //...
};
addStyles(app);
```

### Rules
```javascript
const app = {
    //...
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
    }
    //...
};
addStyles(app);
//...
```

## Global variables
```javascript
const app = {
    //...
    _global: {
        'html, body, #root': {
            padding: 0,
            margin: 0
        }
    },
    //...
};
addStyles(app);
//...
```

## Animation
```javascript
const app = {
    //...
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
            border: `${borderWidth} solid ${color}`,
            'animation': `${this._animationSpinner} 2s linear infinite`
        }
    }
    //...
};
addStyles(app);
//...
```