import React, { useState } from 'react';

import YourInfoFormSection from './YourInfoFormSection';
import SelectPlanFormSection from './SelectPlanFormSection';
import AddonsFormSection from './AddonsFormSection';
import ConfirmationFormSection from './ConfirmationFormSection';
import ThankYouFormSection from './ThankYouFormSection';

import styles from './Form.module.css';

const Form = () => {
    const [formData, setFormData] = useState({
        step: 1,
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
        setFormData((prevState) => {
            return {
                ...prevState,
                step: prevState.step - 1,
            };
        });
    };

    const nextStep = () => {
        setFormData((prevState) => {
            return {
                ...prevState,
                step: prevState.step + 1,
            };
        });
    };

    const handleChange = (input) => (e) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                input: e.target.value,
            };
        });
    };

    // const goForwardButton = (
    //     <button
    //         type='button'
    //         className={`${styles.formNavigationButton} ${styles.nextStepButton}`}
    //         onClick={goForward}
    //     >
    //         Next Step
    //     </button>
    // );

    // const goBackButton = (
    //     <button
    //         type='button'
    //         className={`${styles.formNavigationButton} ${styles.goBackButton}`}
    //         onClick={goBack}
    //     >
    //         Go Back
    //     </button>
    // );

    // const buttonRow = (
    //     <div className={styles.buttonRow}>
    //         {goBackButton}
    //         {goForwardButton}
    //     </div>
    // );

    const renderStep = () => {
        switch (formData.step) {
            case 1:
                return <YourInfoFormSection nextStep={nextStep}></YourInfoFormSection>;
            case 2:
                return (
                    <SelectPlanFormSection
                        prevStep={prevStep}
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={formData}
                    ></SelectPlanFormSection>
                );
            case 3:
                return (
                    <AddonsFormSection
                        prevStep={prevStep}
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={formData}
                    ></AddonsFormSection>
                );
            case 4:
                return (
                    <ConfirmationFormSection
                        prevStep={prevStep}
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={formData}
                    ></ConfirmationFormSection>
                );
            case 5:
                return (
                    <ThankYouFormSection
                        prevStep={prevStep}
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={formData}
                    ></ThankYouFormSection>
                );
            default:
                return;
        }
    };

    return <form>{renderStep(formData.step)}</form>;
};

export default Form;
