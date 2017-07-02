## I-CSS (CSS in JS)

It is npm package, for writing css in js, based on [free-style](https://github.com/blakeembrey/free-style)

### CSS modules in box.

## Install

```
$ npm install i-css --save
```

## Usage

```javascript
import React from 'react';
import {addStyles} from 'i-css';

const app = {
    wrapper: {
        width: '100%',
        border: `1px solid orange`
    }
};
addStyles(app);

const App = () => <div className={app.wrapper}></div>
```