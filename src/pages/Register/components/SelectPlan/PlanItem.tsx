import * as S from './styles';

import { useFormContext } from 'react-hook-form';

import { useAccessibilityKeyBoard } from '../../../../hooks/useAccessibilityKeyBoard';

import { planPrice } from './utils/planPrice';

import { FormProps } from '../../types';
import { PlanItemProps } from '../../types';

export const PlanItem = ({
    id = '',
    value = '',
    title = '',
    yearlyPlan = false,
    monthly = 0,
    yearly = 0,
    children= <></>
}: PlanItemProps) => {
    const { register, formState: { errors } } = useFormContext<FormProps>();

    const { accessibilityKeyDown } = useAccessibilityKeyBoard();

    return (
        <S.planIntem>
            <S.planinputRadio
                id={id}
                type="radio"
                value={value}
                {...register('plan')}
            />
            <S.planLabel
                $invalid={errors.plan ? true : false}
                htmlFor={id}
                tabIndex={0}
                onKeyDown={accessibilityKeyDown}
            >
                {children}
                <S.planContainerText>
                    <S.planTitle>{title}</S.planTitle>
                    <S.planPrice>
                        <strong>
                            {planPrice(yearlyPlan, monthly, yearly)}
                        </strong>
                    </S.planPrice>
                    {yearlyPlan && <S.planDiscount>2 months free</S.planDiscount>}
                </S.planContainerText>
            </S.planLabel>
        </S.planIntem>
    );
}