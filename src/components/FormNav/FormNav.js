import React from 'react';

import FormNavItem from './FormNavItem';

import styles from './FormNav.module.css';

const steps = ['your info', 'select plan', 'add-ons', 'summary'];

const FormNav = (props) => {
    return (
        <nav className={styles.formNav}>
            <ul>
                {steps.map((step, idx) => {
                    const number = idx + 1;
                    if (number === props.currentStep) {
                        return (
                            <li>
                                <FormNavItem
                                    key={idx}
                                    number={number}
                                    title={step}
                                    isActive={true}
                                />
                            </li>
                        );
                    } else {
                        return (
                            <li>
                                <FormNavItem
                                    key={idx}
                                    number={number}
                                    title={step}
                                    isActive={false}
                                />
                            </li>
                        );
                    }
                })}
            </ul>
        </nav>
    );
};

export default FormNav;
