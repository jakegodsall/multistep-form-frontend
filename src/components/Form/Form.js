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
        plan: [
            {
                name: 'arcade',
                cost: 9,
                selected: false,
                yearlyOffer: '2 months free',
            },
            {
                name: 'advanced',
                cost: 12,
                selected: true,
                yearlyOffer: '2 months free',
            },
            {
                name: 'pro',
                cost: 15,
                selected: true,
                yearlyOffer: '2 months free',
            },
        ],
        planCost: {
            arcade: 9,
            advanced: 12,
            pro: 15,
        },
        monthlyYearly: 'monthly',
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
