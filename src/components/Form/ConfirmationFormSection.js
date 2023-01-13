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

    console.log(plan);

    const selectedPlan = plan.filter((el) => {
        return el.selected === true;
    });

    // Calculates the total cost by adding each active addon to the cost of the original plan.
    const totalCost = addons.reduce((total, el) => {
        if (el.selected) {
            return (total += el.cost);
        } else {
            return total;
        }
    }, selectedPlan[0].cost);

    console.log(totalCost);

    return (
        <div className={styles.formSection}>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
            <div className={styles.overview}>
                <div className={styles.overviewHeader}>
                    <h2
                        className={styles.planTitle}
                    >{`${selectedPlan[0].name} (${selectedPlan[0].monthlyYearly})`}</h2>
                    <p className={styles.planCost}>+£{selectedPlan[0].cost}/mo</p>
                </div>
                <div className={styles.addons}>
                    {addons.map((el, idx) => {
                        return (
                            <div key={idx} className={styles.addon}>
                                {el.selected && <p className={styles.addonName}>{el.name}</p>}
                                {el.selected && (
                                    <p className={styles.addonValue}>{`+£${el.cost}/mo`}</p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={styles.totalRow}>
                <p className={styles.totalText}>Total (per month)</p>
                <p className={styles.totalValue}>+£{totalCost}/mo</p>
            </div>
            <div className={styles.buttonRow}>
                <PreviousStepButton onClick={returnToPreviousStep}>Go Back</PreviousStepButton>
                <NextStepButton onClick={continueToNextStep}>Confirm</NextStepButton>
            </div>
        </div>
    );
};

export default ConfirmationFormSection;
