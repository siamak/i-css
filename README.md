## I-CSS (CSS in JS)

It is npm package, for writing css in js, based on [free-style](https://github.com/blakeembrey/free-style)
[Demo](https://irom-io.github.io/i-css/)
[Demo source](https://github.com/irom-io/i-css/blob/master/src/examples/simple/app.js)

### CSS modules in box.

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
    wrapper: { //.wrapper_{hash}
        width: '100%',
        border: `1px solid orange`
    }
};
addStyles(app);

const App = () => <div className={app.wrapper}></div>
```

### Mix styles
```javascript
//...
const app = {
    wrapper() {
        return {
            ...this.full,
            border: `1px solid orange`
        }
    },
    full: {
        width: '100%',
        height: '100%'
    }
};
addStyles(app);
//...
```