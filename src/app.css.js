import {addStyles} from 'i-css';

const app = {
    full: {
        width: '100%',
        height: '100%'
    },
    _global() {
        console.log(this);
        return {
            'html,body': {
                padding: 0,
                margin: 0
            }
        }
    },
    wrapper: {
        backgroundColor: 'red'
    }
};
addStyles(app);

export default app