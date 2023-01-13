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

    console.log(props.values);
    console.log(planType);

    return (
        <div className={styles.formSection}>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
            <div className={styles.overview}>
                <h2 className={styles.planTitle}>{`${planType} (${monthlyYearly})`}</h2>
                <div className={styles.addons}>
                    <div className={styles.addon}>
                        {onlineService && <p className={styles.addonName}>Online Service</p>}
                        {onlineService && <p className={styles.addonValue}>+£1/mo</p>}
                    </div>
                    <div className={styles.addon}>
                        {largerStorage && <p className={styles.addonName}>Larger Storage</p>}
                        {largerStorage && <p className={styles.addonValue}>+£2/mo</p>}
                    </div>
                    <div className={styles.addon}>
                        {customiseProfile && <p className={styles.addonName}>Customise Profile</p>}
                        {customiseProfile && <p className={styles.addonValue}>+£2/mo</p>}
                    </div>
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
