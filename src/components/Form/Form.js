import React, { useState } from 'react';

import YourInfoFormSection from './YourInfoFormSection';
import SelectPlanFormSection from './SelectPlanFormSection';
import AddonsFormSection from './AddonsFormSection';

import styles from './Form.module.css';

const Form = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        emailAddress: '',
        phoneNumber: '',
        planType: '',
        monthlyYearly: '',
        onlineService: false,
        largerStorage: false,
        customiseProfile: false,
    });

    const prevStep = () => {
        setStep((prevStep) => {
            return prevStep - 1;
        });
    };

    const nextStep = () => {
        setStep((prevStep) => {
            return prevStep + 1;
        });
    };

    const goForwardButton = (
        <button
            type='button'
            className={`${styles.formNavigationButton} ${styles.nextStepButton}`}
            onClick={goForward}
        >
            Next Step
        </button>
    );

    const goBackButton = (
        <button
            type='button'
            className={`${styles.formNavigationButton} ${styles.goBackButton}`}
            onClick={goBack}
        >
            Go Back
        </button>
    );

    const buttonRow = (
        <div className={styles.buttonRow}>
            {goBackButton}
            {goForwardButton}
        </div>
    );

    const renderStep = (step) => {
        switch (step) {
            case 1:
                return (
                    <React.Fragment>
                        <YourInfoFormSection nextStep={nextStep}></YourInfoFormSection>
                        {goForwardButton}
                    </React.Fragment>
                );
            case 2:
                return (
                    <React.Fragment>
                        <SelectPlanFormSection
                            prevStep={prevStep}
                            nextStep={nextStep}
                        ></SelectPlanFormSection>
                        {buttonRow}
                    </React.Fragment>
                );
            case 3:
                return (
                    <React.Fragment>
                        <AddonsFormSection
                            prevStep={prevStep}
                            nextStep={nextStep}
                        ></AddonsFormSection>
                        {buttonRow}
                    </React.Fragment>
                );
            default:
                return;
        }
    };

    return <form>{renderStep(step)}</form>;
};

export default Form;
