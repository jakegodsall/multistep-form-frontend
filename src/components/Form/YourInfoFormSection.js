import React, { useState } from 'react';
import styles from './YourInfoFormSection.module.css';

// import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/style.css';

// validators
import { isName, isEmail } from '../../validators';
import { isValidPhoneNumber } from 'react-phone-number-input';
import Button from '../UI/Button';

const Form = () => {
    //  form input states
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
    const [enteredNumber, setEnteredNumber] = useState('');
    const [enteredNumberTouched, setEnteredNumberTouched] = useState(false);

    // for input validators
    const enteredNameIsEmpty = enteredName.trim().length === 0;
    const enteredNameIsNotName = !isName(enteredName);
    const enteredEmailIsEmpty = enteredEmail.trim().length === 0;
    const enteredEmailIsNotEmail = !isEmail(enteredEmail);
    const enteredNumberIsEmpty = enteredNumber.trim().length === 0;
    const enteredNumberIsNotValid = !isValidPhoneNumber(enteredNumber);

    // validator message conditions
    const emptyName = enteredNameIsEmpty && enteredNameTouched;
    const invalidName = !enteredNameIsEmpty && enteredNameIsNotName && enteredNameTouched;
    const emptyEmail = enteredEmailIsEmpty && enteredEmailTouched;
    const invalidEmail = !enteredEmailIsEmpty && enteredEmailIsNotEmail && enteredEmailTouched;
    const emptyNumber = enteredNumberIsEmpty && enteredNumberTouched;
    const invalidNumber = !enteredNumberIsEmpty && enteredNumberIsNotValid && enteredNumberTouched;

    const enteredNameChangeHandler = (e) => {
        setEnteredName(e.target.value);
    };

    const enteredNameBlurHandler = () => {
        setEnteredNameTouched(true);
    };

    const enteredEmailChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
    };

    const enteredEmailBlurHandler = () => {
        setEnteredEmailTouched(true);
    };

    const enteredNumberChangeHandler = (value, country, e, formattedValue) => {
        if (formattedValue) {
            setEnteredNumber(formattedValue);
        } else {
            setEnteredNumber('');
        }
    };

    const enteredNumberBlurHandler = () => {
        setEnteredNumberTouched(true);
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
                    {emptyName && <p className={styles.error}>Name cannot be empty.</p>}
                    {invalidName && <p className={styles.error}>Please enter a valid name.</p>}
                </div>
                <input
                    className={emptyName || invalidName ? styles.inputError : undefined}
                    type='text'
                    id='name'
                    placeholder='e.g. Stephen King'
                    onChange={enteredNameChangeHandler}
                    onBlur={enteredNameBlurHandler}
                    country={'uk'}
                />
            </div>
            <div className={styles.formElement}>
                <div className={styles.labelRow}>
                    <label htmlFor='email-address'>Email address</label>
                    {emptyEmail && <p className={styles.error}>Email address cannot be empty.</p>}
                    {invalidEmail && (
                        <p className={styles.error}>Please enter a valid email address.</p>
                    )}
                </div>
                <input
                    className={emptyEmail || invalidEmail ? styles.inputError : undefined}
                    type='text'
                    id='email-address'
                    placeholder='e.g. stephenking@lorem.com'
                    onChange={enteredEmailChangeHandler}
                    onBlur={enteredEmailBlurHandler}
                />
            </div>
            <div className={styles.formElement}>
                <div className={styles.labelRow}>
                    <label htmlFor='phone'>Phone Number</label>
                    {emptyNumber && <p className={styles.error}>Phone number cannot be empty.</p>}
                    {invalidNumber && (
                        <p className={styles.error}>Please enter a valid phone number.</p>
                    )}
                </div>
                <PhoneInput
                    inputClass={
                        emptyNumber || invalidNumber
                            ? `${styles.phoneInput} ${styles.inputError}`
                            : `${styles.phoneInput}`
                    }
                    buttonClass={styles.phoneButton}
                    id='phone'
                    placeholder='e.g. +1 234 567 890'
                    value={enteredNumber}
                    onChange={enteredNumberChangeHandler}
                    onBlur={enteredNumberBlurHandler}
                ></PhoneInput>
            </div>

            <Button position={styles.buttonPosition}>Next Step</Button>
        </div>
    );
};

export default Form;
