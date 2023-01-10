import React from 'react';

import styles from './FormNavItem.module.css';

const FormNavItem = (props) => {
    return (
        <div className={styles.formNavItem}>
            <div className={styles.circle}>{props.number}</div>
            <div className={styles.textContent}>
                <p className={styles.step}>Step {props.number}</p>
                <p className={styles.title}>{props.title}</p>
            </div>
        </div>
    );
};

export default FormNavItem;
