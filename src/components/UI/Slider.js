import React from 'react';

import styles from './Slider.module.css';

const Slider = (props) => {
    return (
        <input className={styles.slider} id={props.labelID} type='range' min='0' max='1'></input>
    );
};

export default Slider;
