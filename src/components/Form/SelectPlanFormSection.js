import React, { useState } from 'react';
import Slider from '../UI/Slider';
import PlanWidget from './FormWidgets/PlanWidget';
import NextStepButton from '../UI/NextStepButton';

import styles from './SelectPlanFormSection.module.css';
import PreviousStepButton from '../UI/PreviousStepButton';

const SelectPlanFormSection = (props) => {
    const [selectedPlan, setSelectedPlan] = useState('advanced');
    const [sliderValue, setSliderValue] = useState(0);

    // get the plan data form the form state
    const planObject = props.values.plan;

    const onChangeHandler = (value) => {
        setSliderValue(value);
    };

    const monthlyClass = +sliderValue
        ? `${styles.duration}`
        : `${styles.duration} ${styles.activeDuration}`;
    const yearlyClass = +sliderValue
        ? `${styles.duration} ${styles.activeDuration}`
        : `${styles.duration}`;

    const returnToPreviousStep = (e) => {
        e.preventDefault();
        props.prevStep();
    };

    const onClickHandler = (e) => {
        setSelectedPlan(e.target.id);
    };

    const continueToNextStep = (e) => {
        e.preventDefault();

        const monthlyYearly = +sliderValue === 0 ? 'monthly' : 'yearly';

        // set each plan to false
        const newPlanObject = planObject.map((el) => {
            if (el.name === selectedPlan) {
                return {
                    name: el.name,
                    cost: el.cost,
                    selected: true,
                    monthlyYearly: monthlyYearly,
                };
            } else {
                return {
                    name: el.name,
                    cost: el.cost,
                    selected: false,
                    monthlyYearly: monthlyYearly,
                };
            }
        });

        props.handleChange({ plan: newPlanObject });
        props.nextStep();
    };

    return (
        <div className={styles.formSection}>
            <h1 className={styles.sectionTitle}>Select your plan</h1>
            <p className={styles.sectionDescription}>
                You have the option of monthly or yearly billing.
            </p>
            <div className={styles.widgetGrid}>
                {planObject.map((el, idx) => {
                    const isSelected = selectedPlan === el.name;
                    return (
                        <PlanWidget
                            key={idx}
                            id={el.name}
                            monthlyPrice={el.cost}
                            yearlyOffer={el.yearlyOffer}
                            isYearly={sliderValue}
                            onClick={onClickHandler}
                            isSelected={isSelected}
                        ></PlanWidget>
                    );
                })}
            </div>
            <div className={styles.durationOptions}>
                <p className={monthlyClass}>Monthly</p>
                <Slider onChange={onChangeHandler}></Slider>
                <p className={yearlyClass}>Yearly</p>
            </div>
            <div className={styles.buttonRow}>
                <PreviousStepButton onClick={returnToPreviousStep}>Go Back</PreviousStepButton>
                <NextStepButton onClick={continueToNextStep}>Next Step</NextStepButton>
            </div>
        </div>
    );
};

export default SelectPlanFormSection;
