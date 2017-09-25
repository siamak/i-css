## I-CSS (CSS in JS)
It is npm package, for writing css in js.

* ✓ Naming like CSS modules
* ✓ Automatic Vendor Prefixing
* ✓ Pseudo Classes
* ✓ Media Queries
* ✓ CSS cascade
* ✓ Mix styles like mix native objects
* ✓ You can use function for create css class
* ✓ Styles As Object Literals

Based on [free-style](https://github.com/blakeembrey/free-style)
<br />[Demo](https://irom-io.github.io/i-css/)
<br />[Demo app component source](https://github.com/irom-io/i-css/blob/master/src/examples/simple/app.js)
<br />[Demo index file](https://github.com/irom-io/i-css/blob/master/src/examples/simple/index.js) (Example for hot-reloading)

## Install

```
$ npm install i-css --save
```

## Usage

### Basic
```javascript
import React from 'react';
import {addStyles, renderCss} from 'i-css';

const app = addStyles({
    wrapper: { //css modules className: .wrapper_{hash}
        width: '100%',
        border: `1px solid orange`
    }
});
renderCss(document.getElementById('rootCss')); //call it once in root component

const App = () => <div className={app.wrapper}></div>
```

### Mix styles
```javascript
const grid = addStyles({
    fullWidth: {
        width: '100%'
    },
    fullHeight: {
        height: '100%'
    }
})

const app = addStyles({
    //...
    wrapper() { //you can use function or plain object
        return {
            ...this.full,
            border: `1px solid orange`
        }
    },
    full: {
        ...grid.fullWidth,
        ...grid.fullHeight //Mix as native object and use it as className
    }
    //...
});

const App = () => (
    <div className={app.wrapper}>
        <div className={grid.fullHeight}></div>
    </div>
)
```

### Mix classNames
```javascript
import {cn} from 'i-css';
//...
const App = () => <div className={cn(app.wrapper, app.full, {[app.greenBack]: this.state.isGreen})}>
```

### Pseudo selectors & css cascade
```javascript
const app = addStyles({
    //...
    wrapper() {
        return {
           '&:hover': { //pseudo selectors
               backgroundColor: '#ffffff'
           },
           [`&:hover .${this.text}`]: {//css cascade
               color: '#000000'
           }
       }
    },
    text: {
        color: 'red'
    }
    //...
});
```

### Rules
```javascript
const app = addStyles({
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
});
//...
```

## Global variables
```javascript
const app = addStyles({
    //...
    _global: {
        'html, body, #root': {
            padding: 0,
            margin: 0
        }
    },
    body: {
        backgroundColor: 'blue'
    }
    //...
});
//...
```

## Animation
```javascript
const app = addStyles({
    //...
    _animation: {
        spinner: {
            '0%': { 'transform': 'rotate(0deg)' },
            '100%': { 'transform': 'rotate(360deg)' }   
        }
    },
    spinner() {
        const size = 56;
        const borderWidth = '7px';
        const color = '#ff6d4a';

        return {
            width: size,
            height: size,
            border: `${borderWidth} solid ${color}`,
            'animation': `${this._animation.spinner} 2s linear infinite`
        }
    }
    //...
});
//...
```