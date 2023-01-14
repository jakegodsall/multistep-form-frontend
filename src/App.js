import React, { useState } from 'react';

import FormNav from './components/FormNav/FormNav';
import Form from './components/Form/Form';

import styles from './App.module.css';

const App = () => {
    const [step, setCurrentStep] = useState(1);

    const onStepChange = (step) => {
        setCurrentStep(step);
    };
    return (
        <main className={styles.container}>
            <FormNav currentStep={step}></FormNav>
            <Form stepChange={onStepChange}></Form>
        </main>
    );
};

export default App;
