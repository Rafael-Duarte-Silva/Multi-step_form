import { ReactNode, useState } from "react";

type FormComponents = ReactNode;

export const useCurrentStep = (steps: FormComponents[]) => {
    const [currentStep, setCurrentStep] = useState<number>(0);

    const handleGoBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    }

    return { 
        currentStep, 
        setCurrentStep, 
        currentComponent: steps[currentStep],
        handleGoBack,
        firstStep: 0,
        lastStep: steps.length - 1,
    };
}