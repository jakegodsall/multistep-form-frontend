import React from 'react';

import styles from './Slider.module.css';

const Slider = (props) => {
    const onChangeHandler = (e) => {
        props.onChange(e.target.value);
    };

    return (
        <input
            className={styles.slider}
            id={props.labelID}
            type='range'
            min='0'
            max='1'
            defaultValue='0'
            onChange={onChangeHandler}
        ></input>
    );
};

export default Slider;
