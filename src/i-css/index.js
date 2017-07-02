const freeStyle = require('free-style');
let Style = freeStyle.create();

export const cn = function() {
    const classNames = [];
    const mainArguments = Array.prototype.slice.call(arguments);

    mainArguments.forEach((className) => {
        if (typeof className === 'string') {
            classNames.push(className);
        } else if (typeof className === 'object') {
            if (className.toString().indexOf('__') !== -1) {
                classNames.push(className.toString());
            } else {
                for (let key in className) {
                    if (className.hasOwnProperty(key)) {
                        if (className[key]) {
                            classNames.push(key);
                        }
                    }
                }
            }
        }
    });

    return classNames.join(' ');
};

export const addStyles = (styles) => {
    let key;

    for (key in styles) {
        if (styles.hasOwnProperty(key)) {
            ((key, Style) => {
                let style = styles[key];
                if (typeof style === 'function') {
                    style = style.bind(styles);
                    style = style();
                }

                styles[key] = {...style};
                if (key !== '_global') {
                    delete style.toString;
                    const className = Style.registerStyle(style, key);

                    styles[key].toString = () => {
                        return className;
                    };
                } else {
                    for (let subKey in style) {
                        if (style.hasOwnProperty(subKey)) {
                            delete style[subKey].toString;
                        }
                    }
                    Style.registerCss(style);
                }
            })(key, Style);
        }
    }
};

export const renderCss = (styleElement) => {
    styleElement.innerHTML = '';
    styleElement.innerHTML = Style.getStyles();
    console.log(styleElement.innerHTML)
    Style = freeStyle.create(); //Clear styles for hot reload
};