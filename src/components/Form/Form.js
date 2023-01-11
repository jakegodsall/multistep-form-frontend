import React from 'react';

import YourInfoFormSection from './YourInfoFormSection';

import styles from './Form.module.css';
import SelectPlanFormSection from './SelectPlanFormSection';

const Form = () => {
    return (
        <form>
            {/* <YourInfoFormSection></YourInfoFormSection> */}
            <SelectPlanFormSection></SelectPlanFormSection>
        </form>
    );
};

export default Form;
