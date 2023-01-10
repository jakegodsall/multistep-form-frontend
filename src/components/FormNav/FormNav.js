import React from 'react';

import FormNavItem from './FormNavItem';

import styles from './FormNav.module.css';

const steps = ['your info', 'select plan', 'add-ons', 'summary'];

const FormNav = () => {
    return (
        <nav className={styles.formNav}>
            <ul>
                <li>
                    {steps.map((step, idx) => (
                        <FormNavItem key={idx} number={idx + 1} title={step} />
                    ))}
                </li>
            </ul>
        </nav>
    );
};

export default FormNav;
