import { prices } from "../../../consts/prices";

export const headerPrice = (plan: string | undefined, yearlyPlan: boolean | undefined): string => {
    return yearlyPlan ? `$${prices.yearly.plan[plan || 0]}/yr` : `$${prices.monthly.plan[plan || 0]}/mo` || '';
};