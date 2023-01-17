import React from 'react';

import styles from './ThankYouFormSection.module.css';

import ConfirmationIcon from '../../assets/images/icon-thank-you.svg';

const ThankYouFormSection = () => {
    return (
        <div className={styles.formSection}>
            <img src={ConfirmationIcon} alt='Thank You' />
            <h1 className={styles.title}>Thank you!</h1>
            <p className={styles.message}>
                Thanks for confirming your subscription! We hope you have fun using our platform. If
                you ever need support, pleasee feel free to email us at{' '}
                <a href='mailto: support@loremgaming.com'>support@loremgaming.com</a>.
            </p>
        </div>
    );
};

export default ThankYouFormSection;
