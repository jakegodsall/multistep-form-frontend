import React, { useState } from 'react';
import Slider from '../UI/Slider';
import PlanWidget from './FormWidgets/PlanWidget';
import NextStepButton from '../UI/NextStepButton';

import styles from './SelectPlanFormSection.module.css';
import PreviousStepButton from '../UI/PreviousStepButton';

const SelectPlanFormSection = (props) => {
    const [selectedPlan, setSelectedPlan] = useState('advanced');
    const [sliderValue, setSliderValue] = useState(0);

    const onChangeHandler = (value) => {
        setSliderValue(value);
    };

    const monthlyClass = +sliderValue
        ? `${styles.duration}`
        : `${styles.duration} ${styles.activeDuration}`;
    const yearlyClass = +sliderValue
        ? `${styles.duration} ${styles.activeDuration}`
        : `${styles.duration}`;

    const yearlyOffer = '2 months free';

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

        props.handleChange({
            monthlyYearly: monthlyYearly,
            planType: selectedPlan,
        });
        props.nextStep();
    };

    return (
        <div className={styles.formSection}>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <div className={styles.widgetGrid}>
                <PlanWidget
                    id='arcade'
                    monthlyPrice={9}
                    yearlyOffer={yearlyOffer}
                    isYearly={sliderValue}
                    onClick={onClickHandler}
                ></PlanWidget>
                <PlanWidget
                    id='advanced'
                    monthlyPrice={12}
                    yearlyOffer={yearlyOffer}
                    isYearly={sliderValue}
                    onClick={onClickHandler}
                ></PlanWidget>
                <PlanWidget
                    id='pro'
                    monthlyPrice={15}
                    yearlyOffer={yearlyOffer}
                    isYearly={sliderValue}
                    onClick={onClickHandler}
                ></PlanWidget>
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
