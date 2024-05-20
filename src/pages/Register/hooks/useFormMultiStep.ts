import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import { schemaObject } from '../consts/schemaObject';

import { FormProps } from "../types";
import { UseFormMultiStep } from "../types";

export const useFormMultiStep = ({
    setYearlyPlan, 
    yearlyPlan,
    setCurrentStep,
    currentStep, 
    lastStep,
    setData,
}: UseFormMultiStep) => {
    const schema = schemaObject(currentStep);

    const methods = useForm<FormProps>({
        mode: 'onTouched',
        resolver: zodResolver(schema),
        defaultValues: {
            plan: 'none'
        }
    });

    const { handleSubmit, watch } = methods;

    const handleForm = (data: FormProps): void => {
        if (currentStep === lastStep - 3) {
            setData(data);
        }

        if (currentStep < lastStep - 1) {
            setCurrentStep(currentStep + 1);
        }
    }

    useEffect(() => {
        if (currentStep === lastStep - 1 && currentStep < lastStep) {
            const backendDelayEmulator = Math.floor(Math.random() * 2001) + 1000; //between 1 and 2 seconds

            setTimeout(() => {
                setCurrentStep(currentStep + 1);
            }, backendDelayEmulator);
        }
    }, [currentStep]);

    const watchYearly: boolean = watch('yearlyPlan');

    useEffect(() => {
        setYearlyPlan(!yearlyPlan);
    }, [watchYearly]);

    return { 
        handleSubmit,
        handleForm,
        methods
    };
}