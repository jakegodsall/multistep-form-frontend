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
    return (
        <div className={styles.planWidget}>
            <input className={styles.planRadio} type='radio' id={props.id} name='plan' />
            <label className={styles.planLabel} htmlFor={props.id}>
                <img className={styles.planIcon} src={iconMap[props.id]} alt={props.id} />
                <p className={styles.planType}>{props.id}</p>
                <p className={styles.monthlyPrice}>${props.monthlyPrice}/mo</p>
            </label>
        </div>
    );
};

export default PlanWidget;
