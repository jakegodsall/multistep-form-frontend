import React, { useState } from 'react';

import styles from './Form.module.css';

const Form = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredNumber, setEnteredNumber] = useState('');

    const enteredNameChangeHandler = (e) => {
        setEnteredName(e.target.value);
    };

    const enteredEmailChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
    };

    const enteredNumberChangeHandler = (e) => {
        setEnteredNumber(e.target.value);
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
                <input type='text' id='name' onChange={enteredNameChangeHandler} />
            </div>
            <div className={styles.formElement}>
                <label htmlFor='email-address'>Email address</label>
                <input type='text' id='email-address' onChange={enteredEmailChangeHandler} />
            </div>
            <div className={styles.formElement}>
                <label htmlFor='phone-number'>Phone Number</label>
                <input type='text' id='phone-number' onChange={enteredNumberChangeHandler} />
            </div>

            <button type='submit'>Next step</button>
        </form>
    );
};

export default Form;
