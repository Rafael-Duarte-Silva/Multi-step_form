import * as S from './styles';

import { stepList } from '../../consts/stepList';

type StepsListProps = {
    currentStep: number;
    lastStep: number;
}

export const StepsList = ({ currentStep = 0, lastStep = 0 }: StepsListProps) => {
    return (
        <S.ContainerSteps>
            <S.StepsList>
                {stepList.map((step, index) => (
                    <S.StepsItem 
                        key={index}
                        $currentStep={currentStep + 1}
                        $lastStep={lastStep - 1}
                    >
                        <S.StepsNumber>{index + 1}</S.StepsNumber>
                        <S.StepsContainerText>
                            <S.StepsTittle>{`step ${index + 1}`}</S.StepsTittle>
                            <S.StepsText>{step.text}</S.StepsText>
                        </S.StepsContainerText>
                    </S.StepsItem>
                ))
                }
            </S.StepsList>
        </S.ContainerSteps>
    );
}