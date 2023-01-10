import React from 'react';

import FormNav from './components/FormNav/FormNav';
import Form from './components/Form/Form';

import styles from './App.module.css';

const App = () => {
    return (
        <main className={styles.container}>
            <FormNav></FormNav>
            <Form></Form>
        </main>
    );
};

export default App;
