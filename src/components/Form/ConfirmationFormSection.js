import React from 'react';

import PreviousStepButton from '../UI/PreviousStepButton';
import NextStepButton from '../UI/NextStepButton';

import styles from './ConfirmationFormSection.module.css';

const ConfirmationFormSection = (props) => {
    const {
        name,
        emailAddress,
        phoneNumber,
        planType,
        monthlyYearly,
        onlineService,
        largerStorage,
        customiseProfile,
        plan,
        addons,
    } = props.values;

    console.log('name', name);

    const returnToPreviousStep = (e) => {
        e.preventDefault();
        props.prevStep();
    };

    const continueToNextStep = (e) => {
        e.preventDefault();

        props.nextStep();
    };

    console.log(addons);

    return (
        <div className={styles.formSection}>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
            <div className={styles.overview}>
                <h2 className={styles.planTitle}>{`${planType} (${monthlyYearly})`}</h2>
                <div className={styles.addons}>
                    {addons.map((el, idx) => {
                        return (
                            <div className={styles.addon}>
                                {el.selected && <p className={styles.addonName}>{el.name}</p>}
                                {el.selected && (
                                    <p className={styles.addonValue}>{`+£${el.cost}/mo`}</p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={styles.buttonRow}>
                <PreviousStepButton onClick={returnToPreviousStep}>Go Back</PreviousStepButton>
                <NextStepButton onClick={continueToNextStep}>Confirm</NextStepButton>
            </div>
        </div>
    );
};

export default ConfirmationFormSection;
