import React, { useState, useEffect } from 'react';

import FormNav from './components/FormNav/FormNav';
import Form from './components/Form/Form';

import styles from './App.module.css';

const App = () => {
    const [step, setCurrentStep] = useState(1);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 850);

    useEffect(() => {
        const updateMedia = () => {
            setIsDesktop(window.innerWidth > 850);
        };

        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    });

    const onStepChange = (step) => {
        setCurrentStep(step);
    };

    const rendering = isDesktop ? (
        <main className={styles.container}>
            <FormNav currentStep={step}></FormNav>
            <Form stepChange={onStepChange}></Form>
        </main>
    ) : (
        <React.Fragment>
            <FormNav currentStep={step}></FormNav>
            <main className={styles.container}>
                <Form stepChange={onStepChange}></Form>
            </main>
        </React.Fragment>
    );

    return rendering;
};

export default App;
