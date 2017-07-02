import {addStyles} from 'i-css';

const app = {
    _global: {
        'html,body': {
            padding: 0,
            margin: 0
        }
    },
    wrapper: {
        backgroundColor: 'red'
    }
};
addStyles(app);

export default app