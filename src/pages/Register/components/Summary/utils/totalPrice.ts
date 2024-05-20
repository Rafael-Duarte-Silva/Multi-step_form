import { prices } from "../../../consts/prices";

import { FormProps } from "../../../types";

export const TotalPrice = (data: FormProps | undefined): string => {
    let total: number = 0;

    if(!data?.yearlyPlan){
        if(data?.plan){
            total += prices.monthly.plan[data?.plan];
        }
        if(data?.onlineService){
            total += prices.monthly.onlineService;
        }
        if(data?.customizableProfile){
            total += prices.monthly.customizableProfile;
        }
        if(data?.largerStorage){
            total += prices.monthly.largerStorage;
        }

        return `+$${total}/mo`;
    }

    else if(data.yearlyPlan){
        if(data?.plan){
            total += prices.yearly.plan[data?.plan];
        }
        if(data?.onlineService){
            total += prices.yearly.onlineService;
        }
        if(data?.customizableProfile){
            total += prices.yearly.customizableProfile;
        }
        if(data?.largerStorage){
            total += prices.yearly.largerStorage;
        }

        return `$${total}/yr`;
    }

    return '';
}