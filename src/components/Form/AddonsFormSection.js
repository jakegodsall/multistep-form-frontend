import React from 'react';

import styles from './AddonsFormSection.module.css';
import AddonWidget from './FormWidgets/AddonWidget';
import PreviousStepButton from '../UI/PreviousStepButton';
import NextStepButton from '../UI/NextStepButton';

const addons = [
    {
        id: 'onlineService',
        title: 'Online service',
        description: 'Access to multiplayer games',
        monthlyCost: 1,
    },
    {
        id: 'largerStorage',
        title: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        monthlyCost: 2,
    },
    {
        id: 'customiseProfile',
        title: 'Customisable profile',
        description: 'Custom theme on your profile',
        monthlyCost: 2,
    },
];

const AddonsFormSection = (props) => {
    const returnToPreviousStep = (e) => {
        e.preventDefault();
        props.prevStep();
    };

    const continueToNextStep = (e) => {
        e.preventDefault();
        props.nextStep();
    };

    const onChangeHandler = (id, value) => {
        props.handleChange({ [id]: value });
    };

    return (
        <div className={styles.formSection}>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <div className={styles.widgetGrid}>
                {addons.map((el, idx) => {
                    return (
                        <AddonWidget
                            key={idx}
                            id={el.id}
                            title={el.title}
                            description={el.description}
                            monthlyCost={el.monthlyCost}
                            onChange={onChangeHandler}
                        ></AddonWidget>
                    );
                })}
            </div>
            <div className={styles.buttonRow}>
                <PreviousStepButton onClick={returnToPreviousStep}>Go Back</PreviousStepButton>
                <NextStepButton onClick={continueToNextStep}>Next Step</NextStepButton>
            </div>
        </div>
    );
};

export default AddonsFormSection;
