import React, { useState } from 'react';
import styles from './YourInfoFormSection.module.css';

// import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/style.css';

import Joi from 'joi';
import { useValidator } from 'react-joi';

// validators
import { isName, isEmail } from '../../validators';
import { isValidPhoneNumber } from 'react-phone-number-input';
import NextStepButton from '../UI/NextStepButton';

const Form = (props) => {
    const { state, setData, setExplicitField, validate } = useValidator({
        initialData: {
            name: 'Jake',
            emailAddress: 'jake.edward.godsall@gmail.com',
            phoneNumber: '+44 7367426604',
        },
        schema: Joi.object({
            name: Joi.string().min(5).max(20).required(),
            emailAddress: Joi.string()
                .email({
                    tlds: { allow: false },
                })
                .required(),
            phoneNumber: Joi.string().required(),
        }),
        explicitCheck: {
            name: false,
            emailAddress: false,
            phoneNumber: false,
        },
        validationOptions: {
            abortEarly: true,
        },
    });

    const updateName = (e) => {
        setData((prevData) => ({
            ...prevData,
            name: e.target.value,
        }));
    };

    const updateEmailAddress = (e) => {
        setData((prevData) => ({
            ...prevData,
            emailAddress: e.target.value,
        }));
    };

    const updatePhoneNumber = (e) => {
        setData((prevData) => ({
            ...prevData,
            phoneNumber: e.target.value,
        }));
    };

    const continueToNextStep = (e) => {
        e.preventDefault();

        props.nextStep();
    };

    return (
        <div className={styles.formSection}>
            <h1>Personal Info</h1>
            <p className={styles.description}>
                Please provide your name, email address, and phone number.
            </p>
            <div className={styles.formElement}>
                <div className={styles.labelRow}>
                    <label htmlFor='name'>Name</label>
                </div>
                <input
                    type='text'
                    id='name'
                    placeholder='e.g. Stephen King'
                    onChange={updateName}
                    onBlur={() => setExplicitField('name', true)}
                />
                {state.$errors.name.map((data) => data.$message).join(',')}
            </div>
            <div className={styles.formElement}>
                <div className={styles.labelRow}>
                    <label htmlFor='email-address'>Email address</label>
                </div>
                <input
                    type='text'
                    id='email-address'
                    placeholder='e.g. stephenking@lorem.com'
                    onChange={updateEmailAddress}
                    onBlur={() => setExplicitField('emailAddress', true)}
                />
            </div>
            <div className={styles.formElement}>
                <div className={styles.labelRow}>
                    <label htmlFor='phone'>Phone Number</label>
                </div>
                <PhoneInput
                    buttonClass={styles.phoneButton}
                    id='phone'
                    placeholder='e.g. +1 234 567 890'
                    onChange={updatePhoneNumber}
                    onBlur={() => setExplicitField('phoneNumber', true)}
                ></PhoneInput>
            </div>
            <div className={styles.buttonRow}>
                <NextStepButton onClick={continueToNextStep}>Next Step</NextStepButton>
            </div>
        </div>
    );
};

export default Form;
