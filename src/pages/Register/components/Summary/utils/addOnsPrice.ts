export const addOnsPrice = (yearlyPlan: boolean | undefined, yearly: number | undefined, monthly: number | undefined): string => {
    return yearlyPlan ? `+$${yearly}/yr` : `+$${monthly}/mo`;
}