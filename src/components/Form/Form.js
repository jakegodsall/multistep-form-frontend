import React, { useState } from 'react';

import YourInfoFormSection from './YourInfoFormSection';
import SelectPlanFormSection from './SelectPlanFormSection';
import AddonsFormSection from './AddonsFormSection';
import ConfirmationFormSection from './ConfirmationFormSection';
import ThankYouFormSection from './ThankYouFormSection';

import styles from './Form.module.css';

const Form = () => {
    const [formData, setFormData] = useState({
        step: 4,
        name: 'Jake',
        emailAddress: 'jake.edward.godsall@gmail.com',
        phoneNumber: '+44 7367426604',
        planType: 'arcade',
        monthlyYearly: 'monthly',
        onlineService: true,
        largerStorage: false,
        customiseProfile: true,
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

    const handleChange = (input) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                ...input,
            };
        });
    };

    console.log(formData);

    const renderStep = () => {
        switch (formData.step) {
            case 1:
                return (
                    <YourInfoFormSection
                        nextStep={nextStep}
                        handleChange={handleChange}
                    ></YourInfoFormSection>
                );
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

    return <form>{renderStep(2)}</form>;
};

export default Form;
