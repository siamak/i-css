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
                if (key !== '_global') {
                    const className = Style.registerStyle(styles[key], key);

                    styles[key].toString = () => {
                        return className;
                    };
                } else {
                    Style.registerCss(styles[key]);
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