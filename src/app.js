import React from 'react';
import styles from 'app.css';

class App extends React.Component {
    constructor(p_) {
        super(p_);

        this.state = {};
    }
    render() {
        return (
            <div className={styles.wrapper}>
                App
            </div>
        );
    }
}

export default App;