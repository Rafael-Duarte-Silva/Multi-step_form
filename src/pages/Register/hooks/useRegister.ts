import { useState } from 'react';

import { FormProps } from '../types';

export const useRegister = () => {
    const [yearlyPlan, setYearlyPlan] = useState<boolean>(false);
    const [data, setData] = useState<FormProps>();

    return {
        yearlyPlan, 
        setYearlyPlan,
        data, 
        setData
    };
};