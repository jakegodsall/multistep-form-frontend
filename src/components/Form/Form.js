import React, { useState } from 'react';
import styles from './Form.module.css';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const isEmail = (email) => {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
};

const isNumber = (number) => {};

const Form = () => {
    //  form input states
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredNumber, setEnteredNumber] = useState('');

    // for input validators
    const enteredNameIsEmpty = enteredName.trim().length === 0;

    const enteredEmailIsEmpty = enteredEmail.trim().length === 0;
    const enteredEmailIsNotEmail = !isEmail(enteredEmail);

    // const enteredNumberIsEmpty = enteredNumber.trim().length === 0;
    // const enteredNumberIsNotNumber = !isNumber(enteredNumber);

    const enteredNameChangeHandler = (e) => {
        setEnteredName(e.target.value);
    };

    const enteredEmailChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
    };

    const enteredNumberChangeHandler = (value) => {
        setEnteredNumber(value);
    };

    const submitFormHandler = (e) => {
        e.preventDefault();

        console.log(enteredName, enteredEmail, enteredNumber);
    };

    return (
        <form onSubmit={submitFormHandler}>
            <h1>Personal Info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            <div className={styles.formElement}>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    id='name'
                    placeholder='e.g. Stephen King'
                    onChange={enteredNameChangeHandler}
                />
            </div>
            <div className={styles.formElement}>
                <label htmlFor='email-address'>Email address</label>
                <input
                    type='text'
                    id='email-address'
                    placeholder='e.g. stephenking@lorem.com'
                    onChange={enteredEmailChangeHandler}
                />
            </div>
            <div className={styles.formElement}>
                <label htmlFor='phone'>Phone Number</label>
                <PhoneInput
                    id='phone'
                    placeholder='e.g. +1 234 567 890'
                    value={enteredNumber}
                    onChange={enteredNumberChangeHandler}
                ></PhoneInput>
            </div>

            <button type='submit'>Next step</button>
        </form>
    );
};

export default Form;
