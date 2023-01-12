import React from 'react';

import styles from './AddonWidget.module.css';

const AddonWidget = (props) => {
    return (
        <div className={styles.addonWidget}>
            <input type='checkbox' name='addons' id={props.id} />
            <label className={styles.addonLabel} htmlFor={props.id}>
                <div>
                    <p>{props.title}</p>
                    <p>{props.description}</p>
                </div>
                <p>+£{props.monthlyCost}/mo</p>
            </label>
        </div>
    );
};

export default AddonWidget;
