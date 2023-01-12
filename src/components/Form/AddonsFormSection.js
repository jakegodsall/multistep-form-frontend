import React from 'react';

import styles from './AddonsFormSection.module.css';
import AddonWidget from './FormWidgets/AddonWidget';

const addons = [
    {
        id: 'online-service',
        title: 'Online service',
        description: 'Access to multiplayer games',
        monthlyCost: 1,
    },
    {
        id: 'larger-storage',
        title: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        monthlyCost: 2,
    },
    {
        id: 'customisable-profile',
        title: 'Customisable profile',
        description: 'Custom theme on your profile',
        monthlyCost: 2,
    },
];

const AddonsFormSection = () => {
    return (
        <div className={styles.formSection}>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <div className={styles.widgetGrid}>
                {addons.map((el, idx) => {
                    return (
                        <AddonWidget
                            key={idx}
                            id={el.id}
                            title={el.title}
                            description={el.description}
                            monthlyCost={el.monthlyCost}
                        ></AddonWidget>
                    );
                })}
            </div>
        </div>
    );
};

export default AddonsFormSection;
