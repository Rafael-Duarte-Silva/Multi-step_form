import * as S from './styles';

import { FormProvider } from "react-hook-form";

import { YourInfo } from './components/YourInfo';
import { SelectPlan } from './components/SelectPlan';
import { AddOns } from './components/AddOns';
import { Summary } from './components/Summary';
import { StepsList } from './components/StepsList';
import { Sending } from './components/Sending';
import { ThankYou } from './components/ThankYou';

import { useCurrentStep } from './hooks/useCurrentStep';
import { useRegister } from './hooks/useRegister';
import { useFormMultiStep } from './hooks/useFormMultiStep';
import { useAccessibilityKeyBoard } from '../../hooks/useAccessibilityKeyBoard';

export const Register = () => {
    const {
        yearlyPlan,
        setYearlyPlan,
        data,
        setData
    } = useRegister();

    const formComponents = [
        <YourInfo />,
        <SelectPlan yearlyPlan={yearlyPlan} />,
        <AddOns yearlyPlan={yearlyPlan} />,
        <Summary data={data} />,
        <Sending />,
        <ThankYou />
    ];

    const {
        currentStep,
        setCurrentStep,
        handleGoBack,
        currentComponent,
        firstStep,
        lastStep
    } = useCurrentStep(formComponents);

    const {
        handleSubmit,
        handleForm,
        methods
    } = useFormMultiStep({
        setYearlyPlan,
        yearlyPlan,
        currentStep,
        lastStep,
        setCurrentStep,
        setData,
    });

    const { accessibilityKeyDown } = useAccessibilityKeyBoard();

    return (
        <S.ContainerBackground>
            <S.ContainerRegister>
                <S.Form method="post">
                    <StepsList 
                        currentStep={currentStep} 
                        lastStep={lastStep}
                    />
                    <S.FormSection>
                        <S.FormContainerField>
                            <FormProvider {...methods}>
                                {currentComponent}
                            </FormProvider>
                        </S.FormContainerField>
                        {currentStep < lastStep - 1 &&
                            <S.FormContainerButtons>
                                {currentStep > firstStep &&
                                    <S.FormButtonGoBack
                                        type="button"
                                        onKeyDown={accessibilityKeyDown}
                                        onClick={handleGoBack}
                                    >
                                        Go Back
                                    </S.FormButtonGoBack>}
                                {currentStep < lastStep - 2 &&
                                    <S.FormButtonNext
                                        onKeyDown={accessibilityKeyDown}
                                        onClick={handleSubmit(handleForm)}
                                    >
                                        Next Step
                                    </S.FormButtonNext>
                                }
                                {currentStep >= lastStep - 2 &&
                                    <S.FormButtonConfirm
                                        onKeyDown={accessibilityKeyDown}
                                        onClick={handleSubmit(handleForm)}
                                    >
                                        Confirm
                                    </S.FormButtonConfirm>
                                }
                            </S.FormContainerButtons>
                        }
                    </S.FormSection>
                </S.Form>
            </S.ContainerRegister>
        </S.ContainerBackground>
    );
};