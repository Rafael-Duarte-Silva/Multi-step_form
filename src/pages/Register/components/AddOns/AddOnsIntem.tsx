import * as S from './styles';

import { useFormContext } from 'react-hook-form';

import { IconCheckmark } from './IconCheckmark';

import { addOnsPrice } from './utils/addOnsPrice';

import { useAccessibilityKeyBoard } from '../../../../hooks/useAccessibilityKeyBoard';

import { FormProps } from '../../types';
import { AddOnsIntemProps } from '../../types';

export const AddOnsIntem = ({
    id = '',
    registerName = 'name',
    title = '',
    description = '',
    yearlyPlan = false,
    monthly = 0,
    yearly = 0,
}: AddOnsIntemProps) => {
    const { register } = useFormContext<FormProps>();

    const { accessibilityKeyDown } = useAccessibilityKeyBoard();

    return (
        <S.addOnsIntem>
            <S.addOnsinputRadio
                id={id}
                type="checkbox"
                {...register(registerName)}
            />
            <S.addOnsLabel
                htmlFor={id}
                tabIndex={0}
                onKeyDown={accessibilityKeyDown}
            >
                <S.addOnsContainerCheckmark>
                    <IconCheckmark />
                </S.addOnsContainerCheckmark>
                <S.addOnsContainerText>
                    <S.addOnsTitle>{title}</S.addOnsTitle>
                    <S.addOnsDescription>{description}</S.addOnsDescription>
                </S.addOnsContainerText>
                <S.addOnsPrice>
                    <strong>
                        {addOnsPrice(yearlyPlan, monthly, yearly)}
                    </strong>
                </S.addOnsPrice>
            </S.addOnsLabel>
        </S.addOnsIntem>
    );
}