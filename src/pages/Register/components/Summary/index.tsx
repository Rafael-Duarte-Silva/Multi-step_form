import * as S from './styles';

import { FormField } from '../FormField';
import { FormTitle } from '../FormTitle';
import { FormLegend } from '../FormLegend';

import { TotalPrice } from './utils/totalPrice';
import { headerTitle } from './utils/headerTitle';
import { headerPrice } from './utils/headerPrice';
import { totalTittle } from './utils/totalTitle';
import { addOnsPrice } from './utils/addOnsPrice';

import { prices } from '../../consts/prices';

import { FormProps } from '../../types';

type SummaryProps = {
    data?: FormProps;
}

export const Summary = ({ data }: SummaryProps) => {
    return (
        <>
            <FormTitle>Finishing up</FormTitle>
            <FormField>
                <FormLegend>
                    Double-check everything looks OK before confirming.
                </FormLegend>
                <S.Summary>
                    <S.SummaryContainerHeader>
                        <div>
                            <S.SummaryHeaderTitle>
                                {headerTitle(data?.plan, data?.yearlyPlan)}
                            </S.SummaryHeaderTitle>
                            <S.SummaryHeaderChange>Change</S.SummaryHeaderChange>
                        </div>
                        <S.SummaryHeaderPrice>
                            {headerPrice(data?.plan, data?.yearlyPlan)}
                        </S.SummaryHeaderPrice>
                    </S.SummaryContainerHeader>
                    <S.SummarySeparator />
                    <S.SummaryAddOnsContainer>
                        {data?.onlineService && (
                            <>
                                <S.SummaryAddOnsTitle>Online service</S.SummaryAddOnsTitle>
                                <S.SummaryAddOnsPrice>
                                    {addOnsPrice(data?.yearlyPlan, prices.yearly.onlineService, prices.monthly.onlineService)}
                                </S.SummaryAddOnsPrice>
                            </>
                        )}
                        {data?.largerStorage && (
                            <>
                                <S.SummaryAddOnsTitle>Larger storage</S.SummaryAddOnsTitle>
                                <S.SummaryAddOnsPrice>
                                    {addOnsPrice(data?.yearlyPlan, prices.yearly.largerStorage, prices.monthly.largerStorage)}
                                </S.SummaryAddOnsPrice>
                            </>
                        )}
                        {data?.customizableProfile && (
                            <>
                                <S.SummaryAddOnsTitle>Customizable profile</S.SummaryAddOnsTitle>
                                <S.SummaryAddOnsPrice>
                                    {addOnsPrice(data?.yearlyPlan, prices.yearly.customizableProfile, prices.monthly.customizableProfile)}
                                </S.SummaryAddOnsPrice>
                            </>
                        )}
                    </S.SummaryAddOnsContainer>
                    <S.SummaryTotalContainer>
                        <S.SummaryTotalTitle>
                            {totalTittle(data?.yearlyPlan)}
                        </S.SummaryTotalTitle>
                        <S.SummaryTotalPrice>
                            {TotalPrice(data)}
                        </S.SummaryTotalPrice>
                    </S.SummaryTotalContainer>
                </S.Summary>
            </FormField>
        </>
    );
};