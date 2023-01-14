import React from 'react';

import styles from './FormNavItem.module.css';

const FormNavItem = (props) => {
    const circleClasses = props.isActive ? `${styles.circle} ${styles.active}` : `${styles.circle}`;
    return (
        <div className={styles.formNavItem}>
            <div className={circleClasses}>{props.number}</div>
            <div className={styles.textContent}>
                <p className={styles.step}>Step {props.number}</p>
                <p className={styles.title}>{props.title}</p>
            </div>
        </div>
    );
};

export default FormNavItem;
