import React, { useState } from 'react';
import Slider from '../UI/Slider';
import PlanWidget from './FormWidgets/PlanWidget';

import styles from './SelectPlanFormSection.module.css';

const SelectPlanFormSection = () => {
    const [sliderValue, setSliderValue] = useState(0);

    const onChangeHandler = (value) => {
        console.log(value);
        if (value == 1) {
            setSliderValue(true);
        } else {
            setSliderValue(false);
        }
    };

    console.log(durationClasses);

    return (
        <div className={styles.formSection}>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <div className={styles.widgetGrid}>
                <PlanWidget id='arcade' monthlyPrice={9}></PlanWidget>
                <PlanWidget id='advanced' monthlyPrice={12}></PlanWidget>
                <PlanWidget id='pro' monthlyPrice={15}></PlanWidget>
            </div>
            <div className={styles.durationOptions}>
                <p className={durationClasses}>Monthly</p>
                <Slider onChange={onChangeHandler}></Slider>
                <p className={durationClasses}>Yearly</p>
            </div>
        </div>
    );
};

export default SelectPlanFormSection;
