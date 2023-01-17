import React from 'react';

import styles from './PlanWidget.module.css';

import ArcadeIcon from '../../../assets/images/icon-arcade.svg';
import AdvancedIcon from '../../../assets/images/icon-advanced.svg';
import ProIcon from '../../../assets/images/icon-pro.svg';

const iconMap = {
    arcade: ArcadeIcon,
    advanced: AdvancedIcon,
    pro: ProIcon,
};

const PlanWidget = (props) => {
    const planLabelClasses = +props.isYearly
        ? `${styles.planLabel} ${styles.planLabelWithOffer}`
        : `${styles.planLabel}`;

    const yearlyOfferClasses = +props.isYearly
        ? `${styles.yearlyOffer} ${styles.yearlyOfferActive}`
        : `${styles.yearlyOffer}`;

    const radio = props.isSelected ? (
        <input className={styles.planRadio} type='radio' id={props.id} name='plan' />
    ) : (
        <input className={styles.planRadio} type='radio' id={props.id} name='plan' />
    );

    return (
        <div className={styles.planWidget} onClick={props.onClick}>
            {radio}
            <label className={planLabelClasses} htmlFor={props.id}>
                <img className={styles.planIcon} src={iconMap[props.id]} alt={props.id} />
                <div className={styles.textContent}>
                    <p className={styles.planType}>{props.id}</p>
                    <p className={styles.monthlyPrice}>${props.monthlyPrice}/mo</p>
                    <p className={yearlyOfferClasses}>{props.yearlyOffer}</p>
                </div>
            </label>
        </div>
    );
};

export default PlanWidget;
