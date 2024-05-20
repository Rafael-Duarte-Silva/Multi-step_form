import * as S from './styles';

import { FormField } from '../FormField';
import { FormTitle } from '../FormTitle';
import { FormLegend } from '../FormLegend';
import { AddOnsIntem } from './AddOnsIntem';

import { prices } from '../../consts/prices';

type AddOnsProps = {
    yearlyPlan: boolean
}

export const AddOns = ({yearlyPlan = false}: AddOnsProps) => {
    return (
        <>
            <FormTitle>Pick add-ons</FormTitle>
            <FormField>
                <FormLegend>
                    Add-ons help enhance your gaming experience.
                </FormLegend>

                <S.addOnsList>
                    <AddOnsIntem 
                        id='formOnlineService' 
                        registerName='onlineService'
                        title='Online service'
                        description='Access to multiplayer games'
                        yearlyPlan={yearlyPlan}
                        monthly={prices.monthly.onlineService}
                        yearly={prices.yearly.onlineService}

                    />
                    <AddOnsIntem 
                        id='formLargerStorage' 
                        registerName='largerStorage'
                        title='Larger storage'
                        description='Extra 1TB of cloud save'
                        yearlyPlan={yearlyPlan}
                        monthly={prices.monthly.largerStorage}
                        yearly={prices.yearly.largerStorage}

                    />
                    <AddOnsIntem 
                        id='formCustomizableProfile'
                        registerName='customizableProfile'
                        title='Customizable Profile'
                        description='Custom theme on your profile'
                        yearlyPlan={yearlyPlan}
                        monthly={prices.monthly.customizableProfile}
                        yearly={prices.yearly.customizableProfile}

                    />
                </S.addOnsList>
            </FormField>
        </>
    );
};