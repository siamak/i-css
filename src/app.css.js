import {addStyles} from 'i-css';

const app = {
    full: {
        width: '100%',
        height: '100%'
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
            backgroundColor: 'red'
        }
    }
};
addStyles(app);

export default app