import React from 'react';

import styles from './AddonWidget.module.css';

const AddonWidget = (props) => {
    return (
        <div className={styles.addonWidget}>
            <input className={styles.checkbox} type='checkbox' name='addons' id={props.id} />
            <label className={styles.addonLabel} htmlFor={props.id}>
                <div className={styles.textSection}>
                    <p className={styles.title}>{props.title}</p>
                    <p className={styles.description}>{props.description}</p>
                </div>
                <p className={styles.price}>+£{props.monthlyCost}/mo</p>
            </label>
        </div>
    );
};

export default AddonWidget;
