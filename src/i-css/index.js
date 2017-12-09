const freeStyle = require('free-style');
let Style = freeStyle.create();

export const cn = function() {
    const classNames = [];
    const mainArguments = Array.prototype.slice.call(arguments);

    mainArguments.forEach((className) => {
        if (typeof className === 'string') {
            classNames.push(className);
        } else if (typeof className === 'object') {
            if (className.__isICSS) {
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

export const addStyles = (innerStyles) => {
    const styles = {...innerStyles};
    let key;
    const mapItem = (key, Style) => {
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
                    delete style[subKey].__isICSS;
                }
            }
            Style.registerCss(style);
        } else if (key === '_rules') {
            for (let subKey in style) {
                if (style.hasOwnProperty(subKey)) {
                    Style.registerRule(subKey, style[subKey]);
                }
            }
        } else if (key === '_animation') {
            for (let subKey in style) {
                if (style.hasOwnProperty(subKey)) {
                    delete style[subKey].toString;
                    delete style[subKey].__isICSS;
                    let name;
                    name = Style.registerKeyframes(style[subKey], subKey);

                    styles[key][subKey].__isICSS = true;
                    styles[key][subKey].toString = () => {
                        return name;
                    };
                }
            }
        } else {
            delete style.toString;
            delete style.__isICSS;
            let name;

            name = Style.registerStyle(style, key);

            styles[key].__isICSS = true;
            styles[key].toString = () => {
                return name;
            };
        }
    };

    for (key in styles) {
        if (styles.hasOwnProperty(key)) {
            if (typeof styles[key] === 'object') {
                mapItem(key, Style);
            }
        }
    }

    for (key in styles) {
        if (styles.hasOwnProperty(key)) {
            if (typeof styles[key] === 'function') {
                mapItem(key, Style);
            }
        }
    }

    return styles;
};

export const renderCss = (styleElement) => {
    if (!styleElement) return Style.getStyles();

    styleElement.innerHTML = '';
    styleElement.innerHTML = Style.getStyles();
};
