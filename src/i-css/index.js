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
                if (key === '_global') {
                    for (let subKey in style) {
                        if (style.hasOwnProperty(subKey)) {
                            delete style[subKey].toString;
                        }
                    }
                    Style.registerCss(style);
                } else if (key === '_rules') {
                    for (let subKey in style) {
                        if (style.hasOwnProperty(subKey)) {
                            Style.registerRule(subKey, style[subKey]);
                        }
                    }
                } else {
                    delete style.toString;
                    let name;

                    if (key.indexOf('_animation') === 0) {
                        name = Style.registerKeyframes(style, key);
                    } else {
                        name = Style.registerStyle(style, key);
                    }

                    styles[key].toString = () => {
                        return name;
                    };
                }
            })(key, Style);
        }
    }
};

export const renderCss = (styleElement) => {
    styleElement.innerHTML = '';
    styleElement.innerHTML = Style.getStyles();
    Style = freeStyle.create(); //Clear styles for hot reload
};