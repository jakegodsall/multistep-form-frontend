import React from 'react';

import styles from './PreviousStepButton.module.css';

const PreviousStepButton = (props) => {
    return (
        <button onClick={props.onClick} className={styles.previousStepButton}>
            {props.children}
        </button>
    );
};

export default PreviousStepButton;
