import React, { useState } from 'react';
import Slider from '../UI/Slider';
import PlanWidget from './FormWidgets/PlanWidget';

import Button from '../UI/Button';

import styles from './SelectPlanFormSection.module.css';

const SelectPlanFormSection = () => {
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
                ></PlanWidget>
                <PlanWidget
                    id='advanced'
                    monthlyPrice={12}
                    yearlyOffer={yearlyOffer}
                    isYearly={sliderValue}
                ></PlanWidget>
                <PlanWidget
                    id='pro'
                    monthlyPrice={15}
                    yearlyOffer={yearlyOffer}
                    isYearly={sliderValue}
                ></PlanWidget>
            </div>
            <div className={styles.durationOptions}>
                <p className={monthlyClass}>Monthly</p>
                <Slider onChange={onChangeHandler}></Slider>
                <p className={yearlyClass}>Yearly</p>
            </div>
            <div className={styles.buttonRow}>
                <Button position={styles.goBackButtonPosition}>Go Back</Button>
                <Button position={styles.nextStepButtonPosition}>Next Step</Button>
            </div>
        </div>
    );
};

export default SelectPlanFormSection;
