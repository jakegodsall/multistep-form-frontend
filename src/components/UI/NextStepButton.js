import React from 'react';

import styles from './NextStepButton.module.css';

const NextStepButton = (props) => {
    return (
        <button className={styles.nextStepButton} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default NextStepButton;
