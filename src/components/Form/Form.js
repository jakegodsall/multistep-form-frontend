import React, { useState } from 'react';

import YourInfoFormSection from './YourInfoFormSection';
import SelectPlanFormSection from './SelectPlanFormSection';
import AddonsFormSection from './AddonsFormSection';
import ConfirmationFormSection from './ConfirmationFormSection';
import ThankYouFormSection from './ThankYouFormSection';

import styles from './Form.module.css';

const Form = (props) => {
    const [formData, setFormData] = useState({
        step: 2,
        name: '',
        emailAddress: '',
        phoneNumber: '',
        plan: [
            {
                name: 'arcade',
                cost: 9,
                selected: false,
                yearlyOffer: '2 months free',
                monthlyYearly: 'monthly',
            },
            {
                name: 'advanced',
                cost: 12,
                selected: true,
                yearlyOffer: '2 months free',
                monthlyYearly: 'monthly',
            },
            {
                name: 'pro',
                cost: 15,
                selected: false,
                yearlyOffer: '2 months free',
                monthlyYearly: 'monthly',
            },
        ],
        onlineService: true,
        largerStorage: false,
        customiseProfile: true,
        addons: [
            {
                id: 'onlineService',
                name: 'Online Service',
                cost: 1,
                selected: true,
            },
            {
                id: 'largerStorage',
                name: 'Larger Storage',
                cost: 2,
                selected: true,
            },
            {
                id: 'customiseProfile',
                name: 'Customise Profile',
                cost: 2,
                selected: true,
            },
        ],
    });

    const prevStep = () => {
        props.stepChange(formData.step - 1);
        setFormData((prevState) => {
            return {
                ...prevState,
                step: prevState.step - 1,
            };
        });
    };

    const nextStep = () => {
        props.stepChange(formData.step + 1);
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

    const renderStep = () => {
        switch (formData.step) {
            case 1:
                return (
                    <YourInfoFormSection
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={formData}
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

    console.log(formData);

    return <form>{renderStep(2)}</form>;
};

export default Form;
