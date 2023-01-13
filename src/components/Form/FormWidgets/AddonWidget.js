import React, { useRef } from 'react';

import styles from './AddonWidget.module.css';

const AddonWidget = (props) => {
    const inputRef = useRef();

    const onChangeHandler = () => {
        props.onChange(inputRef.current.id, inputRef.current.checked);
    };

    return (
        <div className={styles.addonWidget}>
            <input
                className={styles.checkbox}
                type='checkbox'
                name='addons'
                id={props.id}
                ref={inputRef}
                onChange={onChangeHandler}
            />
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
