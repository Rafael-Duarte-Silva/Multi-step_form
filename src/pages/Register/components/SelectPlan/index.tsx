import * as S from './styles';

import { useFormContext } from 'react-hook-form';

import { FormField } from '../FormField';
import { FormTitle } from '../FormTitle';
import { FormLegend } from '../FormLegend';
import { IconArcade } from './IconArcade';
import { IconAdvanced } from './IconAdvanced';
import { IconPro } from './IconPro';
import { PlanItem } from './PlanItem';

import { prices } from '../../consts/prices';

import { useAccessibilityKeyBoard } from '../../../../hooks/useAccessibilityKeyBoard';

import { FormProps } from '../../types';

type SelectPlanProps = {
    yearlyPlan: boolean
}

export const SelectPlan = ({yearlyPlan = false}: SelectPlanProps) => {
    const { register } = useFormContext<FormProps>();

    const { accessibilityKeyDown } = useAccessibilityKeyBoard();

    return (
        <>
            <FormTitle>Select your plan</FormTitle>
            <FormField>
                <FormLegend>You have the option of monthly or yearly billing.</FormLegend>
                <S.planList>
                    <PlanItem
                        id='formInputArcade'
                        value='arcade'
                        title='Arcade'
                        yearlyPlan={yearlyPlan}
                        monthly={prices.monthly.plan.arcade}
                        yearly={prices.yearly.plan.arcade}
                    >
                        <IconArcade />
                    </PlanItem>
                    <PlanItem
                        id='formInputAdvanced'
                        value='advanced'
                        title='Advanced'
                        yearlyPlan={yearlyPlan}
                        monthly={ prices.monthly.plan.advanced}
                        yearly={prices.yearly.plan.advanced}
                    >
                        <IconAdvanced />
                    </PlanItem>
                    <PlanItem
                        id='formInputPro'
                        value='pro'
                        title='Pro'
                        yearlyPlan={yearlyPlan}
                        monthly={prices.monthly.plan.pro}
                        yearly={prices.yearly.plan.pro}
                    >
                        <IconPro />
                    </PlanItem>
                </S.planList>

                <S.planToggleLabel 
                    htmlFor="formInputTogglePlan"
                    tabIndex={0}
                    onKeyDown={accessibilityKeyDown}
                >
                        <S.planToggleInputCheckbox
                            id="formInputTogglePlan"
                            type="checkbox"
                            {...register('yearlyPlan')}
                        />

                        <S.planToggleText>Monthly</S.planToggleText>
                        <S.planToggleContainer>
                            <S.planToggle $animable={yearlyPlan}/>
                        </S.planToggleContainer>
                        <S.planToggleText>Yearly</S.planToggleText>
                    </S.planToggleLabel>
            </FormField>
        </>
    );
};